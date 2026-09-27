export const name="lightstrip-fill";
export const id="dl_07b38f4135c3f950976e";
export const url=new URL("../icons/lightstrip-fill.svg?v=b680fbe577e8dbd98b91354317a5492ee5d458f8cbeb7a129bf5fc2c1b3de705",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
