export const name="hdr_enhanced_select";
export const id="dl_dad5ae032f20697ee096";
export const url=new URL("../icons/hdr_enhanced_select.svg?v=f769101f40747ad2bb1c0e56a798e493a8fd052cf7bc4022057e50199f994d98",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
