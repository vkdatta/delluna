export const name="selection-all";
export const id="dl_0c16fe7fd91646a3aa8e";
export const url=new URL("../icons/S/selection-all.svg?v=881c1d741d30b990cddd22684ac16a2b2c4987d83d8678762b6c184a27de71e7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
