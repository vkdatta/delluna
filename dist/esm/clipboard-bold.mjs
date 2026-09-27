export const name="clipboard-bold";
export const id="dl_a87998e9fb704b639900";
export const url=new URL("../icons/clipboard-bold.svg?v=5a8236c1606d2fa6eaaa680991d33bb77519d51bf28a4b6bafd896397a5c70d1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
