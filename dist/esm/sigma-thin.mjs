export const name="sigma-thin";
export const id="dl_e020047d0b5b4f1c8afa";
export const url=new URL("../icons/S/sigma-thin.svg?v=56ed93158b2308fe419fc768b6bcac60f7458bfb2c4faba021b553c9fee5f860",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
