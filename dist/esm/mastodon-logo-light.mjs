export const name="mastodon-logo-light";
export const id="dl_a2c57223ad3246afa758";
export const url=new URL("../icons/mastodon-logo-light.svg?v=cae4f50abac0e9397141590688a11c297a4fb6ee1e045ed0530934135f4f3102",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
