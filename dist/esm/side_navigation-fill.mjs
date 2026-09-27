export const name="side_navigation-fill";
export const id="dl_9b4901d81293f19fd2c5";
export const url=new URL("../icons/side_navigation-fill.svg?v=f7c035f8e553eeafc972c94472a265aad022715bad35d853f31b2ea88d553690",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
