export const name="satellite_alt-fill";
export const id="dl_440c9dbf2e194278963c";
export const url=new URL("../icons/S/satellite_alt-fill.svg?v=3c633f75305c6db6733984365d424b5478c6a11a33750b439925d6e176e4389d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
