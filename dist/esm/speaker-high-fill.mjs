export const name="speaker-high-fill";
export const id="dl_b5918f795bd0e049e103";
export const url=new URL("../icons/speaker-high-fill.svg?v=7d6efb6973ebfaec3ce3e6daa1384da3c602ba65a5fd9fd6f09d5c209e1496f4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
