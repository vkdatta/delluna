export const name="wb_incandescent-fill";
export const id="dl_2d4895dc368ec8c77325";
export const url=new URL("../icons/wb_incandescent-fill.svg?v=a2d7047a0c665b884b6661747b99c65002e8bb1c27b9d93079c0be50d4abf3cd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
