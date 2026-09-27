export const name="square-exclamation-point";
export const id="dl_0f4b9151313d4c60a80d";
export const url=new URL("../icons/square-exclamation-point.svg?v=60566ba34bdbda806c70fb3c9b6d6f548279b615c13ae5debded8f111ac1180e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
