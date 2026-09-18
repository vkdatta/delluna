export const name="snowmobile";
export const id="dl_39da156103954d5ba093";
export const url=new URL("../icons/S/snowmobile.svg?v=c73315d3b2a9f78aa7289a9d9f1ccd5736a66ec936bd67e0c040b373a8794871",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
