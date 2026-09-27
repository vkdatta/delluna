export const name="accessibility_new-fill";
export const id="dl_2b6be4b144809a157c42";
export const url=new URL("../icons/accessibility_new-fill.svg?v=6871b7e62d09126ef59db7258573b6850552a08464828f0497f43e89515ab79b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
