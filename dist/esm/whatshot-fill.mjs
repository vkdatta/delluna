export const name="whatshot-fill";
export const id="dl_3c6499a9e26c49a7992c";
export const url=new URL("../icons/W/whatshot-fill.svg?v=f00e0d2380302fc86b1f427b91002984694bf602321dd0006c2265e752858c20",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
