<script setup lang="ts">
import { computed } from 'vue'
import { useGameStore } from '../stores/gameStore'
import gameConfig from '../config/gameConfig'
import {
  getAffinityColor,
  getAffinityStage,
  getMoodColor,
  getMoodLabel
} from '../utils/gameUtils'

const emit = defineEmits<{
  (e: 'toggle-clues'): void
}>()

const gameStore = useGameStore()

const charactersWithConfig = computed(() => {
  return gameStore.unlockedCharacters.map(charState => {
    const config = gameConfig.characters.find(c => c.id === charState.id)
    return { state: charState, config }
  }).filter(item => item.config)
})

const hiddenCharactersProgress = computed(() => {
  return gameStore.hiddenCharactersWithClueProgress
})

function selectCharacter(id: string) {
  gameStore.selectCharacter(id)
}
</script>

<template>
  <div class="character-panel card">
    <h2 class="panel-title">
      <span class="title-icon">💕</span>
      角色状态
    </h2>

    <div class="character-list">
      <div
        v-for="item in charactersWithConfig"
        :key="item.state.id"
        class="character-card"
        :class="{ selected: gameStore.selectedCharacterId === item.state.id }"
        @click="selectCharacter(item.state.id)"
      >
        <div class="character-avatar">{{ item.config?.avatar }}</div>
        
        <div class="character-info">
          <div class="character-header">
            <span class="character-name">{{ item.config?.name }}</span>
            <span class="affinity-stage">{{ getAffinityStage(item.state.affinity) }}</span>
          </div>
          
          <div class="stat-row">
            <span class="stat-label">好感</span>
            <div class="progress-bar">
              <div 
                class="progress-fill"
                :style="{ 
                  width: `${Math.max(0, (item.state.affinity / gameConfig.maxAffinity) * 100)}%`,
                  backgroundColor: getAffinityColor(item.state.affinity, gameConfig.maxAffinity)
                }"
              ></div>
            </div>
            <span class="stat-value">{{ item.state.affinity }}</span>
          </div>
          
          <div class="stat-row">
            <span class="stat-label">心情</span>
            <div class="progress-bar">
              <div 
                class="progress-fill"
                :style="{ 
                  width: `${(item.state.mood / gameConfig.maxMood) * 100}%`,
                  backgroundColor: getMoodColor(item.state.mood)
                }"
              ></div>
            </div>
            <span class="stat-value mood" :style="{ color: getMoodColor(item.state.mood) }">
              {{ getMoodLabel(item.state.mood) }}
            </span>
          </div>
        </div>
      </div>
    </div>

    <div v-if="hiddenCharactersProgress.length > 0" class="hidden-characters-section">
      <div class="section-header">
        <span class="section-icon">🔍</span>
        <span class="section-title">神秘角色</span>
        <button class="view-all-btn" @click="emit('toggle-clues')">查看线索</button>
      </div>
      
      <div class="hidden-character-list">
        <div
          v-for="progress in hiddenCharactersProgress"
          :key="progress.character.id"
          class="hidden-character-card"
          @click="emit('toggle-clues')"
        >
          <div class="hidden-avatar">
            <span class="avatar-icon">{{ progress.character.avatar }}</span>
            <span class="lock-icon">🔒</span>
          </div>
          <div class="hidden-info">
            <span class="hidden-name">???</span>
            <div class="clue-progress">
              <div class="clue-progress-bar">
                <div 
                  class="clue-progress-fill"
                  :style="{ width: `${progress.progress}%` }"
                ></div>
              </div>
              <span class="clue-count">{{ progress.collectedCount }}/{{ progress.totalCount }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div v-if="gameStore.currentCharacterConfig" class="character-detail">
      <div class="detail-divider"></div>
      <p class="detail-description">{{ gameStore.currentCharacterConfig.description }}</p>
      <p class="detail-personality">性格：{{ gameStore.currentCharacterConfig.personality }}</p>
    </div>
  </div>
</template>

<style scoped>
.character-panel {
  padding: 20px;
}

.panel-title {
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  gap: 8px;
}

.title-icon {
  font-size: 22px;
}

.character-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.character-card {
  display: flex;
  gap: 14px;
  padding: 14px;
  background: var(--bg-tertiary);
  border-radius: var(--radius-md);
  cursor: pointer;
  transition: all 0.2s;
  border: 2px solid transparent;
}

.character-card:hover {
  transform: translateX(4px);
  background: var(--accent-light);
}

.character-card.selected {
  border-color: var(--accent-primary);
  background: var(--accent-light);
}

.character-avatar {
  width: 56px;
  height: 56px;
  background: var(--bg-secondary);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 28px;
  flex-shrink: 0;
}

.character-info {
  flex: 1;
  min-width: 0;
}

.character-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
}

.character-name {
  font-weight: 600;
  font-size: 15px;
}

.affinity-stage {
  font-size: 12px;
  padding: 2px 8px;
  background: var(--accent-primary);
  color: white;
  border-radius: 9999px;
}

.stat-row {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 4px;
}

.stat-label {
  font-size: 12px;
  color: var(--text-secondary);
  width: 30px;
  flex-shrink: 0;
}

.progress-bar {
  flex: 1;
  height: 6px;
  background: var(--bg-secondary);
  border-radius: 3px;
  overflow: hidden;
}

.progress-fill {
  height: 100%;
  border-radius: 3px;
  transition: width 0.3s;
}

.stat-value {
  font-size: 12px;
  font-weight: 500;
  min-width: 30px;
  text-align: right;
}

.stat-value.mood {
  font-size: 11px;
}

.character-detail {
  margin-top: 8px;
}

.detail-divider {
  height: 1px;
  background: var(--border-light);
  margin: 12px 0;
}

.detail-description {
  font-size: 13px;
  color: var(--text-secondary);
  line-height: 1.5;
  margin-bottom: 6px;
}

.detail-personality {
  font-size: 12px;
  color: var(--text-muted);
}

.hidden-characters-section {
  margin-top: 16px;
  padding-top: 16px;
  border-top: 1px solid var(--border-light);
}

.section-header {
  display: flex;
  align-items: center;
  gap: 6px;
  margin-bottom: 12px;
}

.section-icon {
  font-size: 16px;
}

.section-title {
  font-size: 14px;
  font-weight: 600;
  color: var(--text-secondary);
  flex: 1;
}

.view-all-btn {
  font-size: 12px;
  padding: 4px 12px;
  background: var(--accent-light);
  color: var(--accent-primary);
  border-radius: 9999px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
}

.view-all-btn:hover {
  background: var(--accent-primary);
  color: white;
}

.hidden-character-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.hidden-character-card {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px;
  background: var(--bg-tertiary);
  border-radius: var(--radius-md);
  cursor: pointer;
  transition: all 0.2s;
  border: 2px dashed var(--border-light);
}

.hidden-character-card:hover {
  background: var(--accent-light);
  border-color: var(--accent-primary);
  transform: translateX(4px);
}

.hidden-avatar {
  position: relative;
  width: 48px;
  height: 48px;
  flex-shrink: 0;
}

.avatar-icon {
  width: 48px;
  height: 48px;
  background: var(--bg-secondary);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  filter: grayscale(100%);
  opacity: 0.6;
}

.lock-icon {
  position: absolute;
  bottom: -4px;
  right: -4px;
  font-size: 12px;
  background: var(--bg-primary);
  width: 18px;
  height: 18px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.hidden-info {
  flex: 1;
  min-width: 0;
}

.hidden-name {
  font-size: 14px;
  font-weight: 600;
  color: var(--text-muted);
  display: block;
  margin-bottom: 6px;
}

.clue-progress {
  display: flex;
  align-items: center;
  gap: 8px;
}

.clue-progress-bar {
  flex: 1;
  height: 6px;
  background: var(--bg-secondary);
  border-radius: 3px;
  overflow: hidden;
}

.clue-progress-fill {
  height: 100%;
  background: var(--accent-primary);
  border-radius: 3px;
  transition: width 0.3s;
}

.clue-count {
  font-size: 11px;
  font-weight: 600;
  color: var(--accent-primary);
  min-width: 36px;
  text-align: right;
}
</style>
