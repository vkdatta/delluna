export const name="apk_install";
export const id="dl_bdb64a28385b4def992c";
export const url=new URL("../icons/apk_install.svg?v=97c6dbe1188b48c4841fe1794b9c6abe78bdf1bb800dfc440d9a36a82d3b5ca8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
