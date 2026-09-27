export const name="explore_off";
export const id="dl_1544eca34fa6fecf1a97";
export const url=new URL("../icons/explore_off.svg?v=d70033d188ec75d034bda28f46bd4410dec0b4705f5be4148584270911eef9e9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
