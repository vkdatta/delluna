export const name="lucid_3-square-arrow-out-down-right";
export const id="dl_257f6bda913e4ef9a08e";
export const url=new URL("../icons/lucid_3-square-arrow-out-down-right.svg?v=dcccfffb9f080bcae81589b61d8ba42a6f1f4ed4aba12560d5e26ac63a865949",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
