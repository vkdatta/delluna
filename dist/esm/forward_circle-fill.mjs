export const name="forward_circle-fill";
export const id="dl_047e241f46f1fcf9fa68";
export const url=new URL("../icons/forward_circle-fill.svg?v=934228c85a20aedb7ed6eb237394e4a616be06bd830c8c44854fa7504e444175",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
