export const name="trending-up-down";
export const id="dl_e587c032a788459f8caf";
export const url=new URL("../icons/trending-up-down.svg?v=6fb09abce8739ec13f1e5dbf9684e10423d72f0048ca2908655d82f90292ac1d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
