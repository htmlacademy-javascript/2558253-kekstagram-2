import { describe, it, expect } from 'vitest';
import { createPhotos, createComment } from '../js/main.js';

describe('createPhotos', () => {
  it('should return array of 25 photos', () => {
    const photos = createPhotos();
    expect(photos).toHaveLength(25);
  });

  it('each photo has proper structure', () => {
    const photos = createPhotos();
    photos.forEach((photo) => {
      expect(photo).toHaveProperty('id');
      expect(photo).toHaveProperty('url');
      expect(photo).toHaveProperty('description');
      expect(photo).toHaveProperty('likes');
      expect(Array.isArray(photo.comments)).toBe(true);
    });
  });

  it('should all ids be unique', () => {
    const photos = createPhotos();
    const ids = photos.map((photo) => photo.id);
    expect(new Set(ids).size).toBe(25);
  });
});

describe('createComment', () => {
  it('should message be string', () => {
    const comment = createComment();
    expect(typeof comment.message).toBe('string');
  });
});
