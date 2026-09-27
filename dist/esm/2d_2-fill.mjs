export const name="2d_2-fill";
export const id="dl_94a0453f7de59acc8d3e";
export const url=new URL("../icons/2d_2-fill.svg?v=977afad9a73dbfaf37c7be31886b622023f2b7afd6e82030ac4a52b4358c37d2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
