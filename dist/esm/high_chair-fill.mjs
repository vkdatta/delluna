export const name="high_chair-fill";
export const id="dl_fb549114ae5d571b3fc4";
export const url=new URL("../icons/high_chair-fill.svg?v=51bf1921951b4a1a67e9fd837310c9e6b4d33361eb370aeffa430b8a80ada13f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
