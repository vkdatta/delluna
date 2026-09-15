export const name="climate_mini_split-fill";
export const id="dl_eeac06fbd6414261b054";
export const url=new URL("../icons/C/climate_mini_split-fill.svg?v=c4aa77aa6a6235837594718e353edfa555a26fd2fd824196eb336aaf25873a4e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
