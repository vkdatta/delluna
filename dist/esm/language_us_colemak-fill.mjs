export const name="language_us_colemak-fill";
export const id="dl_094ce90a5c211f19767f";
export const url=new URL("../icons/language_us_colemak-fill.svg?v=d04d9fff9bdbe334ec8a748eab387c910a8c0cfd544806d647a9323cbef5baa0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
