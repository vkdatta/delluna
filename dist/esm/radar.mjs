export const name="radar";
export const id="dl_69847d456ae34ed75cd7";
export const url=new URL("../icons/material_symbols/radar.svg?v=c2894c2a5481e0fe2e5bd31ef935bafa40e5b447e53c338aec8d449dd441654a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
