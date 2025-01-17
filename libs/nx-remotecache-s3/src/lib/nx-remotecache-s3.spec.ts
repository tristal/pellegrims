import runner from './nx-remotecache-s3';
import { performance } from 'perf_hooks';

describe('nx-remotecache-s3', () => {
  beforeEach(() => {
    performance.mark('init-local');
    performance.mark('command-execution-begins');
  });

  test('should have a defined runner', async () => {
    const runner$ = await runner(
      [],
      { lifeCycle: { startCommand: jest.fn(), endCommand: jest.fn() } },
      {
        nxJson: { npmScope: 'proj' },
        projectGraph: { nodes: {}, dependencies: {} },
      }
    );
    expect(runner$).toBeDefined();
  });
});
