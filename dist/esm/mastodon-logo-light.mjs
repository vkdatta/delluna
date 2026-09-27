export const name="mastodon-logo-light";
export const id="dl_a2c57223ad3246afa758";
export const url=new URL("../icons/mastodon-logo-light.svg?v=69725618409e347d9e48954e6cb6db99675b300941927425c4f0a5e938c7674d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
