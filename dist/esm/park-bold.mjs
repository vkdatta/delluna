export const name="park-bold";
export const id="dl_121f97cecf4446fc8e58";
export const url=new URL("../icons/park-bold.svg?v=9d94ae76cff3de00119d5d6d49dee097f9ce7c36bf4c4d2d7343b7b34dfcf91f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
