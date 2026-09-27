export const name="mobile_2-fill";
export const id="dl_0d092ab8c69e13e53b0d";
export const url=new URL("../icons/mobile_2-fill.svg?v=0aac8896d25ad07f19eebf986211ab2205861fb404966a0b8e8a838ebeb92564",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
