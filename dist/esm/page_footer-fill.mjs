export const name="page_footer-fill";
export const id="dl_e87cc6682ba54a3db573";
export const url=new URL("../icons/page_footer-fill.svg?v=5e0658910f95254925834ea107d60aa8859ed27b0cea22220af5680a3bbadfbd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
