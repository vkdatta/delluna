export const name="mic_alert-fill";
export const id="dl_b9c68a1ccc264ba39d6b";
export const url=new URL("../icons/M/mic_alert-fill.svg?v=58ad02611463540171292a2c1b83727825ad8b031b73ba89c5267b5005ae3d32",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
