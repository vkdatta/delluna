export const name="package_2-fill";
export const id="dl_a487c8683497472ba0cb";
export const url=new URL("../icons/package_2-fill.svg?v=608f63e1fce98e64c13c6fed18b6143bd2dc3e1ec4e5e7e5d543793c7fb4857c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
