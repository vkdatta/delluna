export const name="lucid_1-arrow-down-1-0";
export const id="dl_c6bd5e17ed764e6687a9";
export const url=new URL("../icons/lucid_1-arrow-down-1-0.svg?v=7d39b6b332b2fe214a289d10ad7835b6f7638362d5284993294d6aad0c2af9ea",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
