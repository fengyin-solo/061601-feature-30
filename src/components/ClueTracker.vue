<script setup lang="ts">
import { computed } from 'vue'
import { useGameStore } from '../stores/gameStore'
import gameConfig from '../config/gameConfig'

const emit = defineEmits<{
  (e: 'close'): void
}>()

const gameStore = useGameStore()

const allCharactersWithClues = computed(() => {
  return gameStore.hiddenCharactersWithClueProgress
})

function getClueStatusIcon(collected: boolean) {
  return collected ? '✅' : '❓'
}

function getProgressColor(progress: number) {
  if (progress >= 100) return '#10b981'
  if (progress >= 60) return '#f59e0b'
  return '#6b7280'
}
</script>

<template>
  <div class="modal-overlay" @click.self="emit('close')">
    <div class="modal-content card">
      <div class="modal-header">
        <h2 class="modal-title">
          <span class="title-icon">🔍</span>
          线索收集
        </h2>
        <button class="close-btn" @click="emit('close')">✕</button>
      </div>

      <div class="modal-body">
        <div v-if="allCharactersWithClues.length === 0" class="empty-state">
          <div class="empty-icon">🔍</div>
          <p>暂无可收集的线索</p>
        </div>

        <div v-for="progress in allCharactersWithClues" :key="progress.character.id" class="character-clue-section">
          <div class="character-header">
            <div class="character-avatar-wrapper">
              <span class="character-avatar" :class="{ 'unlocked-avatar': progress.unlocked }">{{ progress.character.avatar }}</span>
              <span v-if="!progress.unlocked" class="locked-badge">🔒</span>
              <span v-else class="unlocked-badge">✨</span>
            </div>
            <div class="character-info">
              <h3 class="character-name" :class="{ 'name-revealed': progress.unlocked }">
                {{ progress.unlocked ? progress.character.name : '???' }}
              </h3>
              <p class="character-hint">
                {{ progress.unlocked ? progress.character.description : '神秘角色' }}
              </p>
            </div>
            <div class="progress-info">
              <span class="progress-count">{{ progress.collectedCount }}/{{ progress.totalCount }}</span>
            </div>
          </div>

          <div class="progress-bar-container">
            <div class="progress-bar-bg">
              <div
                class="progress-bar-fill"
                :style="{ width: `${progress.progress}%`, backgroundColor: getProgressColor(progress.progress) }"
              ></div>
            </div>
            <span class="progress-text">{{ Math.round(progress.progress) }}%</span>
          </div>

          <div class="clue-list">
            <div
              v-for="clue in progress.clues"
              :key="clue.config.id"
              class="clue-item"
              :class="{ collected: clue.state.collected, locked: !clue.state.collected }"
            >
              <div class="clue-icon">
                <span v-if="clue.state.collected">{{ clue.config.icon }}</span>
                <span v-else>{{ getClueStatusIcon(clue.state.collected) }}</span>
              </div>
              <div class="clue-content">
                <h4 class="clue-name">
                  {{ clue.state.collected ? clue.config.name : '未发现的线索' }}
                </h4>
                <p class="clue-description">
                  {{ clue.state.collected ? clue.config.description : clue.config.hint }}
                </p>
              </div>
              <div class="clue-status">
                {{ clue.state.collected ? '已收集' : '未发现' }}
              </div>
            </div>
          </div>

          <div v-if="progress.progress >= 100 && !progress.unlocked" class="unlock-hint">
            <span class="hint-icon">✨</span>
            <span>所有线索已收集，继续探索也许能遇到 ta...</span>
          </div>

          <div v-if="progress.unlocked" class="unlocked-hint">
            <span class="hint-icon">🌟</span>
            <span>已成功解锁 {{ progress.character.name }}！</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 20px;
}

.modal-content {
  width: 100%;
  max-width: 600px;
  max-height: 85vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.modal-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 24px;
  border-bottom: 1px solid var(--border-light);
}

.modal-title {
  font-size: 18px;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 8px;
  margin: 0;
}

.title-icon {
  font-size: 22px;
}

.close-btn {
  width: 32px;
  height: 32px;
  border-radius: 8px;
  background: var(--bg-tertiary);
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s;
}

.close-btn:hover {
  background: var(--accent-light);
  transform: scale(1.1);
}

.modal-body {
  padding: 24px;
  overflow-y: auto;
  flex: 1;
}

.empty-state {
  text-align: center;
  padding: 60px 20px;
  color: var(--text-muted);
}

.empty-icon {
  font-size: 48px;
  margin-bottom: 16px;
  opacity: 0.5;
}

.character-clue-section {
  margin-bottom: 32px;
}

.character-clue-section:last-child {
  margin-bottom: 0;
}

.character-header {
  display: flex;
  align-items: center;
  gap: 14px;
  margin-bottom: 16px;
}

.character-avatar-wrapper {
  position: relative;
  width: 56px;
  height: 56px;
  flex-shrink: 0;
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
  filter: grayscale(100%);
  opacity: 0.7;
}

.character-avatar.unlocked-avatar {
  filter: none;
  opacity: 1;
  background: var(--accent-light);
}

.locked-badge {
  position: absolute;
  bottom: -4px;
  right: -4px;
  font-size: 14px;
  background: var(--bg-primary);
  width: 20px;
  height: 20px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.unlocked-badge {
  position: absolute;
  bottom: -4px;
  right: -4px;
  font-size: 12px;
  background: var(--bg-primary);
  width: 20px;
  height: 20px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.character-info {
  flex: 1;
}

.character-name {
  font-size: 16px;
  font-weight: 600;
  margin: 0 0 2px 0;
  color: var(--text-muted);
}

.character-name.name-revealed {
  color: var(--accent-primary);
}

.character-hint {
  font-size: 12px;
  color: var(--text-muted);
  margin: 0;
}

.progress-info {
  text-align: right;
}

.progress-count {
  font-size: 18px;
  font-weight: 700;
  color: var(--accent-primary);
}

.progress-bar-container {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 20px;
}

.progress-bar-bg {
  flex: 1;
  height: 8px;
  background: var(--bg-secondary);
  border-radius: 4px;
  overflow: hidden;
}

.progress-bar-fill {
  height: 100%;
  border-radius: 4px;
  transition: width 0.5s ease;
}

.progress-text {
  font-size: 12px;
  font-weight: 600;
  min-width: 45px;
  text-align: right;
  color: var(--text-secondary);
}

.clue-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.clue-item {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  padding: 14px;
  background: var(--bg-tertiary);
  border-radius: var(--radius-md);
  border: 2px solid transparent;
  transition: all 0.2s;
}

.clue-item.collected {
  background: var(--accent-light);
  border-color: var(--accent-primary);
}

.clue-item.locked {
  opacity: 0.7;
}

.clue-icon {
  width: 36px;
  height: 36px;
  background: var(--bg-secondary);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  flex-shrink: 0;
}

.clue-item.collected .clue-icon {
  background: var(--accent-primary);
  color: white;
}

.clue-content {
  flex: 1;
  min-width: 0;
}

.clue-name {
  font-size: 14px;
  font-weight: 600;
  margin: 0 0 4px 0;
}

.clue-item.locked .clue-name {
  color: var(--text-muted);
  font-style: italic;
}

.clue-description {
  font-size: 12px;
  color: var(--text-secondary);
  line-height: 1.5;
  margin: 0;
}

.clue-item.locked .clue-description {
  color: var(--accent-primary);
  font-style: italic;
}

.clue-status {
  font-size: 11px;
  padding: 4px 10px;
  border-radius: 9999px;
  font-weight: 500;
  flex-shrink: 0;
}

.clue-item.collected .clue-status {
  background: var(--accent-primary);
  color: white;
}

.clue-item.locked .clue-status {
  background: var(--bg-secondary);
  color: var(--text-muted);
}

.unlock-hint {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 16px;
  background: linear-gradient(135deg, var(--accent-light), transparent);
  border-radius: var(--radius-md);
  margin-top: 16px;
  font-size: 13px;
  color: var(--accent-primary);
  font-weight: 500;
}

.unlocked-hint {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 16px;
  background: linear-gradient(135deg, #d1fae5, transparent);
  border-radius: var(--radius-md);
  margin-top: 16px;
  font-size: 13px;
  color: #059669;
  font-weight: 500;
}

.hint-icon {
  font-size: 16px;
}
</style>
