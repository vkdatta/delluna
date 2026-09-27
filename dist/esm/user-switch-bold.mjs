export const name="user-switch-bold";
export const id="dl_82e275e96f9bfb7189af";
export const url=new URL("../icons/user-switch-bold.svg?v=44664d240a6fdf56d11162efe1511b60375df9c447d15fe99b86a9f5772d387a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
