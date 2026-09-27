export const name="columns";
export const id="dl_1a31197674584a16ab0d";
export const url=new URL("../icons/columns.svg?v=4db8697d5b85b9f4fe3d25b566a8f375b9205a317b8db3cf2340bc8e7feb1248",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
