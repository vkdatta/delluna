export const name="lucid_1-cherry";
export const id="dl_a0200f452ad14bf79276";
export const url=new URL("../icons/lucid_1-cherry.svg?v=0439c895f8296aa8198096550296b67475e94532eef1b19a3a7a157e10e2e35a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
