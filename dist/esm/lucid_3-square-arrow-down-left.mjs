export const name="lucid_3-square-arrow-down-left";
export const id="dl_d1c4614b7f2c4f699d77";
export const url=new URL("../icons/lucid_3-square-arrow-down-left.svg?v=f91265a99d093698bac6166208757e4c59728ec62db3c29dc22e25cb10fee3d5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
