export const name="lucid_1-cannabis-off";
export const id="dl_25219aace4ee45ac8e0e";
export const url=new URL("../icons/lucid_1-cannabis-off.svg?v=ea13126020a051ba342b3bf4c15cbff6ee62a0be6215573532ff1f43c43b7f24",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
