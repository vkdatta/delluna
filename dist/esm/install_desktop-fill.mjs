export const name="install_desktop-fill";
export const id="dl_9660d5f26f734fe2af52";
export const url=new URL("../icons/I/install_desktop-fill.svg?v=a73d74b1bc38854d57d8084787c5a1426f7ef0ab40b2397631b6496ac2b94d0f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
