export const name="h_plus_mobiledata_badge";
export const id="dl_21c1996e3e0dc100458e";
export const url=new URL("../icons/h_plus_mobiledata_badge.svg?v=4b34f764c996a43c10721135ed774c55f2c300354d831833f979674727f49412",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
