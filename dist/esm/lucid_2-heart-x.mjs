export const name="lucid_2-heart-x";
export const id="dl_8c8e95e0b40c42de8e22";
export const url=new URL("../icons/lucid_2-heart-x.svg?v=8545009d63b30ba4e4563bd95af6aea5300e773c87e58534a2b800eff40477c6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
