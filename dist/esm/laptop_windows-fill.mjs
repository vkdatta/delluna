export const name="laptop_windows-fill";
export const id="dl_5126ece6493149d18999";
export const url=new URL("../icons/laptop_windows-fill.svg?v=0e027bf931f2d9c1909345230d8310f97dc67e7694e9a26c3ca2409a1d564483",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
