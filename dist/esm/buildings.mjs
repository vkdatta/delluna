export const name="buildings";
export const id="dl_fa2a6cca20814b51ad0d";
export const url=new URL("../icons/buildings.svg?v=2979d9b995fcb786ad3b45bbb2467ab88644ba8d7ac583b4ce757ddf83909be4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
