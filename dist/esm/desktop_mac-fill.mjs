export const name="desktop_mac-fill";
export const id="dl_e41f58f3dbb1491bb0b3";
export const url=new URL("../icons/desktop_mac-fill.svg?v=961351ce057b14a6f93ffd72565be6995e85b8235cffdd21d9e2648247f84a2b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
