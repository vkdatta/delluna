export const name="cow-bold";
export const id="dl_bbd597d3655b49b3a7b5";
export const url=new URL("../icons/cow-bold.svg?v=7b3c05ae17f4d9390942c64263dd59848a1cc41caef658a89e879580a2cc117b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
