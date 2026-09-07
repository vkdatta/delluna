export const name="shield-light";
export const id="dl_df0d27dc414744fea735";
export const url=new URL("../icons/S/shield-light.svg?v=7730b53eca1725ba8309bcad28462412607d768c3b9e712947234f9e2ea8e349",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
