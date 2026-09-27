export const name="hurricane-bold";
export const id="dl_be3623ebc3b44bb1ae4a";
export const url=new URL("../icons/hurricane-bold.svg?v=69c1e034f3deba7bc32d0f1130b9590ee5292c9c291eef5c217b4592fd165c99",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
