export const name="water_drops";
export const id="dl_c41d502844bd5f0b7289";
export const url=new URL("../icons/water_drops.svg?v=d8d52262a9e090ffea23374ea8cf4069962f0294fe5419247083c7b1aac0db8e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
