export const name="lucid_3-shuffle";
export const id="dl_1d5e4a99a6084bb086e9";
export const url=new URL("../icons/lucid_3-shuffle.svg?v=56ada24d95b89f40d30bbb2785c285bc8d5b791867beced701c1cc9507da78fa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
