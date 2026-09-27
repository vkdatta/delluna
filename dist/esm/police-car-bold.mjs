export const name="police-car-bold";
export const id="dl_dd8ce6d26166472daca4";
export const url=new URL("../icons/police-car-bold.svg?v=e1aeebf35760d38691b6c00969048561535a28ebe7e7cc77b17b6c263717adb8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
