export const name="lucid_1-at-sign";
export const id="dl_0ab3d86b7d9b4603aea2";
export const url=new URL("../icons/lucid_1-at-sign.svg?v=9f9fa2c03a7acda03ed7c31e68d83dabff0f0a6a52494c47076a7f8eae172a56",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
