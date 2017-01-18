
export type AsyncStorageBackend = {
  clear: function,
  getAllKeys: function,
  multiGet: function,
  multiSet: function,
  mergeItem: ?function,
  multiMerge: ?function,
  filter: ?string
};

