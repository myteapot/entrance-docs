import { source } from '@/lib/source';
import { llms } from 'fumadocs-core/source';

export const revalidate = false;
export const runtime = 'edge';

export function GET() {
  return new Response(llms(source).index());
}
