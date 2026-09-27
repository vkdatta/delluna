export const name="map-pin-line-thin";
export const id="dl_e25644c25cd94b74ad4c";
export const url=new URL("../icons/map-pin-line-thin.svg?v=b8f76b42937c655826cce050f72923aa0f2b883a05eec82c074c0e4c49097c50",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
