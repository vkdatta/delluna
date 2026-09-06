export const name="mouse-scroll-duotone";
export const id="dl_0c760a825d1e49a19221";
export const url=new URL("../icons/mouse-scroll-duotone.svg?v=215819e057f45820836c9bda80ac34e4501470ee26520317743bc8742ba6b9d3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
