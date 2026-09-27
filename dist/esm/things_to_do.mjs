export const name="things_to_do";
export const id="dl_c6c6ffc76d41ea89b295";
export const url=new URL("../icons/things_to_do.svg?v=5804594f19cfb4ad67954450e2e66a45215ab1657b1073598c7b538c01041486",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
