export const name="football-fill";
export const id="dl_e5212412b8314fff8d06";
export const url=new URL("../icons/football-fill.svg?v=b2c61225d9038eb154127efb8acadb3cd65bbe1f30f70e7a1b194aa0575f38f4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
