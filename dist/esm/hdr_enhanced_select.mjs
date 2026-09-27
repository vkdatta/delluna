export const name="hdr_enhanced_select";
export const id="dl_cc174970ecd4cd015c31";
export const url=new URL("../icons/hdr_enhanced_select.svg?v=761b972817165dc7c35a7010f606a7a67a564391584910dfbb4d53905b9ea7a0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
