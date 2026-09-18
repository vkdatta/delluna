export const name="carry_on_bag_inactive";
export const id="dl_f00b5add7c92417b9039";
export const url=new URL("../icons/carry_on_bag_inactive.svg?v=f456606abc4c4197b763800a79461089dc616877ce71e3dbd0b00a8054e85a91",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
