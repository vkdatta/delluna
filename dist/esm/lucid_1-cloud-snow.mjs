export const name="lucid_1-cloud-snow";
export const id="dl_b481140de0f943ba9e5b";
export const url=new URL("../icons/lucid_1-cloud-snow.svg?v=01e72aa999dc099ebe90e491214de2f2d9e4ed29f8c4291ced123f826d8abc11",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
