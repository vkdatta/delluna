export const name="h_mobiledata_badge-fill";
export const id="dl_1fb20b105f21d8e18f5b";
export const url=new URL("../icons/h_mobiledata_badge-fill.svg?v=2b40a17b0fb2886b811185cc4f5fc66962172b2f861c9e17c25657e6595c65e9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
