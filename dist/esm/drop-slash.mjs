export const name="drop-slash";
export const id="dl_9697f5f089e5420b9239";
export const url=new URL("../icons/drop-slash.svg?v=ccf3afa50af1fb3f24047aa4ef7800d2f87e67fdc9c5b7b39177d9676d5370fa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
