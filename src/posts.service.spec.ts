import { Post, PostsService } from './posts.service';

describe('PostsService', () => {
  let postsService: PostsService;
  const post: Omit<Post, 'id' | 'date'> = {
    text: 'Mocked post',
  };

  beforeEach(async () => {
    postsService = new PostsService();

    postsService.create({ text: 'Some pre-existing post' });
  });

  it('should add a new post', () => {
    const createdPost = postsService.create(post);
    expect(postsService.find(createdPost.id)).toEqual(createdPost);
  });

  it('should find a post', () => {
    const testPost = postsService.create({ text: 'Test post' });
    const found = postsService.find(testPost.id);

    expect(found).toBeDefined();
    expect(found).toEqual(testPost);
    expect(found?.text).toBe('Test post');
  });
});