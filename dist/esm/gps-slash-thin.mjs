export const name="gps-slash-thin";
export const id="dl_3d3eae54461c401c902f";
export const url=new URL("../icons/gps-slash-thin.svg?v=da5ba158699960cb2d5c27e85469136e75062ff5c8b53582bf093719bc4d140b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
