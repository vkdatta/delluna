export const name="location_on";
export const id="dl_4478c61da91843b88f9d";
export const url=new URL("../icons/location_on.svg?v=0c048fab8914e040ca4b90c645e7b541a3516dcf6a06834c5a2eb2aee440cb9a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
