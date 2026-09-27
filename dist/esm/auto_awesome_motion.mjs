export const name="auto_awesome_motion";
export const id="dl_b06b3403478b08b66de8";
export const url=new URL("../icons/auto_awesome_motion.svg?v=6425ecd1a490a61e747933cafafcc4c18041518458b4e87daab119b56ea52437",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
