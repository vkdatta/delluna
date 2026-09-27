export const name="folder-minus-light";
export const id="dl_e803c594b0d34f04bca8";
export const url=new URL("../icons/folder-minus-light.svg?v=ab8b7769c82d1152555fc54fb380d951dfff8a9029dffc0026a56e696bfe816b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
