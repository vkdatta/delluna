export const name="pause-duotone";
export const id="dl_c06a7599334e4bd6bb3d";
export const url=new URL("../icons/pause-duotone.svg?v=d8cd1f4b61cc90a6f70bb87db2dc4bda686f8ef9f3c69722c3528860b5c43c1c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
