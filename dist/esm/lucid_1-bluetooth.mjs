export const name="lucid_1-bluetooth";
export const id="dl_a0c59bf919354f9dba54";
export const url=new URL("../icons/lucid_1-bluetooth.svg?v=c5074acb3a820ea55039446bd30459a827933cf94c0502f0abe93aa8a2a58874",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
