export const name="lock-simple-duotone";
export const id="dl_4275c921040247b9912c";
export const url=new URL("../icons/lock-simple-duotone.svg?v=6aefb8787e70d6f4a5a501c0acfb7325b8c5a17d5db48ebe80a3e41833d7ea17",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
