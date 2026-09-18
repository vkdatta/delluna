export const name="4g_plus_mobiledata-fill";
export const id="dl_49c5503531004f048c29";
export const url=new URL("../icons/4g_plus_mobiledata-fill.svg?v=c8e5f959ef7310c3de6f17dd766e2db7ba629388b29fcac227946158a43174f7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
