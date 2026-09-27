export const name="diversity_1";
export const id="dl_f7824f692c6f0652bdab";
export const url=new URL("../icons/diversity_1.svg?v=8c1b87bab34584eaeb0f2ecae266f039e15e7afc2292209a5cd7c838dae5bc37",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
