export const name="museum-fill";
export const id="dl_d0211ff508400dd35c45";
export const url=new URL("../icons/museum-fill.svg?v=6225e7ccf47e426b60256c20aa2ed31427bfbb24950af4d951dd17906b42d609",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
