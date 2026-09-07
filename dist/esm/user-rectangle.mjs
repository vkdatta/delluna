export const name="user-rectangle";
export const id="dl_54b1f4c4bd8e46609e30";
export const url=new URL("../icons/U/user-rectangle.svg?v=a6e1032402c57b62508b06c8fc5a0e372c47803e9088f7146967cf4710c1cfa8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
