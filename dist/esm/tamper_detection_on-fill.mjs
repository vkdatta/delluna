export const name="tamper_detection_on-fill";
export const id="dl_46394a7048a857cd02ba";
export const url=new URL("../icons/tamper_detection_on-fill.svg?v=74da7a1456fcba03e0535cab7c5d101f99a4b4502207eebc7b03839f3ed30fde",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
