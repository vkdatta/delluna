export const name="towel-bold";
export const id="dl_a4125bc8aa3afc5fa15d";
export const url=new URL("../icons/towel-bold.svg?v=b55d1b068b0abffe346b020a1452b545c4b3c1c9a9bb99889c93ba053c159040",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
