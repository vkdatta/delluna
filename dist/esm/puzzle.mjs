export const name="puzzle";
export const id="dl_6f5ce3a719f74ebb83e5";
export const url=new URL("../icons/puzzle.svg?v=762261ae43b8f067865bfd9a3c09af76e1fed231a0ee8f08e0c89f0e62cc9203",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
