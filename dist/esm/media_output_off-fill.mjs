export const name="media_output_off-fill";
export const id="dl_8f8e50afcf364f969cfe";
export const url=new URL("../icons/media_output_off-fill.svg?v=5b518b007bbef40657df457c32d3ea064a182665910999c51e3daf553271d0d5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
