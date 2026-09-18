export const name="personal_bag_off-fill";
export const id="dl_df105b6e473c487fa9a4";
export const url=new URL("../icons/personal_bag_off-fill.svg?v=84dbc4200c80cafe670112680256bcfb4337e089ba885a9d0acae9cf1cb0219f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
