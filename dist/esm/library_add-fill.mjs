export const name="library_add-fill";
export const id="dl_daa39299fa5651193249";
export const url=new URL("../icons/library_add-fill.svg?v=f9444fba8bbd6cc3f85bedd976eee262ca9246269cf51f5edef309bf2ee83ee8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
