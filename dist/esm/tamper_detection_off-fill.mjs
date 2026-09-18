export const name="tamper_detection_off-fill";
export const id="dl_580240dfef634ad39d19";
export const url=new URL("../icons/tamper_detection_off-fill.svg?v=e5344cb02480a8bd65e1b82b68a0e81d44a6de30428a8f4330b520128991f40e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
