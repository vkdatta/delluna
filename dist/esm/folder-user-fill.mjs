export const name="folder-user-fill";
export const id="dl_eb0b5c44003c4c0a81cd";
export const url=new URL("../icons/folder-user-fill.svg?v=2a1f0f096784e5e2b9dc9866a55b0754a0cc391166c2468cd169ccf2baf01b71",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
