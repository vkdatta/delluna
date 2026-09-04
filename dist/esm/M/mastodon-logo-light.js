export const name="mastodon-logo-light";
export const id="dl_a2c57223ad3246afa758";
export const url=new URL("../../icons/M/mastodon-logo-light.svg?v=5c44f2f5038415a24d3b4dac37504c111169b4aea2ba9f02f5e9659a28c8e29f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>r.text())}
