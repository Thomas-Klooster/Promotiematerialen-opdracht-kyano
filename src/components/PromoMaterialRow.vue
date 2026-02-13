<script setup>
import { computed } from "vue";

const props = defineProps({
  item: { type: Object, required: true },
  modelValue: { type: Array, default: () => [] }, // selected ids
});

const emit = defineEmits(["update:modelValue", "menu"]);

const checked = computed(() => props.modelValue.includes(props.item.id));

function toggle(val) {
  const next = val
    ? [...props.modelValue, props.item.id]
    : props.modelValue.filter((id) => id !== props.item.id);

  emit("update:modelValue", next);
}
</script>

<template>
  <v-hover v-slot="{ isHovering, props: hoverProps }">
    <v-card
      v-bind="hoverProps"
      class="row"
      :class="{ 'row--hover': isHovering }"
      variant="outlined"
      rounded="lg"
      elevation="0"
    >
      <div class="d-flex align-center ga-4 px-4 py-3">
        <v-checkbox
          :model-value="checked"
          @update:model-value="toggle"
          hide-details
          density="compact"
        />

        <v-avatar class="thumb" rounded="lg" size="44">
          <template v-if="item.thumb">
            <v-img :src="item.thumb" cover />
          </template>
          <template v-else>
            <v-icon icon="mdi-file-document-outline" />
          </template>
        </v-avatar>

        <div class="flex-grow-1">
          <div class="text-body-1 font-weight-medium">{{ item.title }}</div>
          <div class="text-body-2 text-medium-emphasis">
            {{ item.subtitle }}
          </div>
        </div>

        <v-chip
          :color="item.statusColor"
          variant="tonal"
          size="small"
          class="mr-2"
        >
          {{ item.status }}
        </v-chip>

        <v-btn icon variant="text" @click="emit('menu', item)">
          <v-icon icon="mdi-dots-vertical" />
        </v-btn>
      </div>
    </v-card>
  </v-hover>
</template>

<style scoped>
.row {
  border-color: rgba(0,0,0,0.10);
  background: #fff;
}

.row--hover {
  border-color: rgba(0,0,0,0.18);
}

.thumb {
  border: 1px solid rgba(0,0,0,0.08);
  background: #f6f6f6;
  color: rgba(0,0,0,0.55);
}
</style>
