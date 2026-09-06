export const name="lucid_3-package-check";
export const id="dl_a862c7c27eb14d059cc2";
export const url=new URL("../icons/lucid_3-package-check.svg?v=9a5e1821b10e0f995c4eb008544aab00ec5064ae591ac94409a5ab81c97b2db7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
