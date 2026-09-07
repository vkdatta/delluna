export const name="seal-thin";
export const id="dl_bca25064b0d148b38714";
export const url=new URL("../icons/S/seal-thin.svg?v=dceadb56d083a34754c2c49bacda5d3da78aa0ab7a400e0721657e3493cd524e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
