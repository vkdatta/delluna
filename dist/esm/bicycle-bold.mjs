export const name="bicycle-bold";
export const id="dl_f92b8e1137f84a3a9faf";
export const url=new URL("../icons/bicycle-bold.svg?v=08cf1a416d3283690ff72392683cf96f95e48574b0cd2baedeebe1e68cc7e021",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
