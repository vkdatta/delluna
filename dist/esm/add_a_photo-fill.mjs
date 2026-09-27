export const name="add_a_photo-fill";
export const id="dl_b37782bc5dee7900cfb0";
export const url=new URL("../icons/add_a_photo-fill.svg?v=ea856a322a1ce41469d564e4b9e20f31ba0f49312ac374be3c03f917286a93b8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
