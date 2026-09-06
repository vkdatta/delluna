export const name="lucid_3-minus";
export const id="dl_b489c283c5ee4ca58496";
export const url=new URL("../icons/lucid_3-minus.svg?v=1cedf9aa7158262f1c93b1bedef3da842fcbd3cdc2dd97a8e8341b3d8625924b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
