export const name="view_timeline-fill";
export const id="dl_01569bae7cfa8be17653";
export const url=new URL("../icons/view_timeline-fill.svg?v=f5abf2bd058ad18f781d4f995de7698d4db8d0c31c2d1fc774df99358eb73685",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
