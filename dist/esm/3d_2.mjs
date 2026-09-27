export const name="3d_2";
export const id="dl_b5e2ab0ad6b1f1f868de";
export const url=new URL("../icons/3d_2.svg?v=2e1823666a40f430ef6b94354f451c7f00f9316c242af8d686edd7087940ab07",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
