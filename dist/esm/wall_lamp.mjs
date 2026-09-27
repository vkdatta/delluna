export const name="wall_lamp";
export const id="dl_db135178da8a0b1cc7fd";
export const url=new URL("../icons/wall_lamp.svg?v=cd8ff315326d25c62461c953e5bcdc0a6fd4050687a016b1df6178ed543d0f4b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
