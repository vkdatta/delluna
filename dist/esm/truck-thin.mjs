export const name="truck-thin";
export const id="dl_7f5b80884b8cc54cafc1";
export const url=new URL("../icons/truck-thin.svg?v=3934fdfdab68da51c8bc017848bf244183f39ffbc8470c08738344ec40b04354",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
