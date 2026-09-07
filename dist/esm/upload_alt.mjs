export const name="upload_alt";
export const id="dl_79e52ea43f63403898fa";
export const url=new URL("../icons/all_60_named_svgs/upload_alt.svg?v=a58e3eb7dc6186cbe3006ead81a0e8f7dfeb6ed01502939d000a33679f459a07",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
