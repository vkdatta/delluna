export const name="carry_on_bag_checked-fill";
export const id="dl_2640d52b660c46c39668";
export const url=new URL("../icons/carry_on_bag_checked-fill.svg?v=e48f9bee3041a244a9b2e2c06cca8e83b142808effe4e81cbb885db4e54fdf83",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
