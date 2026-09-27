export const name="water_bottle_large";
export const id="dl_4b62934538eff435c954";
export const url=new URL("../icons/water_bottle_large.svg?v=a90960b5c43e9941781fe2d4406d761281eba438d0269c6e9d9d10c45ae526df",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
