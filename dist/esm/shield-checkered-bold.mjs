export const name="shield-checkered-bold";
export const id="dl_87ec6d7789cc905470cf";
export const url=new URL("../icons/shield-checkered-bold.svg?v=9f9ba55c6ed429f109196b10ea55f0b15a9af1367b6be1c7240bcd922c538eb9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
