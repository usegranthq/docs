import { Metadata } from 'next';

export function createMetadata(override: Metadata): Metadata {
  return {
    ...override,
  };
}
