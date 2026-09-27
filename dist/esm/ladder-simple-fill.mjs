export const name="ladder-simple-fill";
export const id="dl_26a36c85399f44859614";
export const url=new URL("../icons/ladder-simple-fill.svg?v=9fdd14e967697f9ee735d80530da45a76e1c84803a22e6a8ee65ce64e1135e1c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
