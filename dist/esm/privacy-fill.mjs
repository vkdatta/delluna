export const name="privacy-fill";
export const id="dl_0124f75753e256d85197";
export const url=new URL("../icons/privacy-fill.svg?v=7aad0a1a17fafbf6074ee30425ceb15c5f8f22d1d2abcd8981c58b9b8bf699fe",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
