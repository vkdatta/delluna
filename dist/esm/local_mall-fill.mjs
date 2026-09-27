export const name="local_mall-fill";
export const id="dl_4e7a0cde3dc3f70558bb";
export const url=new URL("../icons/local_mall-fill.svg?v=7f3b9f7233131a528ea9179dc470046eb27217e7a99b0e5dcba24aedfe3b43ce",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
