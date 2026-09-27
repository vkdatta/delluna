export const name="facebook-logo-fill";
export const id="dl_50682d998a764a2d9e7a";
export const url=new URL("../icons/facebook-logo-fill.svg?v=bc2d951fde8a441eb871655f9a09d26336d483b569451f461f6930e28d45297b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
