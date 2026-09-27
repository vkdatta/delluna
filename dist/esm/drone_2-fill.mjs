export const name="drone_2-fill";
export const id="dl_3cbeab1b6fd72fbc56e0";
export const url=new URL("../icons/drone_2-fill.svg?v=18f23914542aec3cac05ddf0ae1b974af9bd8a43eaadfd8ca936bb2f4f9802fb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
