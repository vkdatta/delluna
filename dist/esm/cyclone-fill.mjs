export const name="cyclone-fill";
export const id="dl_00355c223be041918aaa";
export const url=new URL("../icons/C/cyclone-fill.svg?v=50825796cb1587e2e658ac7a1cd244474feb2430449490eb6daa21cf360735f8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
