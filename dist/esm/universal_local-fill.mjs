export const name="universal_local-fill";
export const id="dl_2c1178fce12d94ff632f";
export const url=new URL("../icons/universal_local-fill.svg?v=73c696ec9e9156590a2daf82c8b66a3a98335d4b15fde476c13b8b11cdfc8fbd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
