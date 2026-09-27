export const name="chair_alt";
export const id="dl_caa1ffcc6196012e8f94";
export const url=new URL("../icons/chair_alt.svg?v=0368f297586428943adbdf976f61fcb13f305eea431e77c44c34bb3d8d2bd1ea",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
