export const name="file_png-fill";
export const id="dl_c2088dfaf52541ef8d8f";
export const url=new URL("../icons/file_png-fill.svg?v=eacd0bcb536063ca9757887b8b2afe02ad3918557c2e1d0aeef6d85010602607",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
