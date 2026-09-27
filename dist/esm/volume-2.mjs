export const name="volume-2";
export const id="dl_3aa48d2527f4447e83bb";
export const url=new URL("../icons/volume-2.svg?v=8fae76670167774a868713a54a8450e5b5c41a8784647b0a8ff61d8a2aa07a8e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
