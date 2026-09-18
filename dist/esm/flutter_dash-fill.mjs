export const name="flutter_dash-fill";
export const id="dl_57048e6a831441b3bf99";
export const url=new URL("../icons/flutter_dash-fill.svg?v=1c223a74e257e6d7eaac8b78f70b23733549ebbc928ba9889017e65e6a0cbba9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
