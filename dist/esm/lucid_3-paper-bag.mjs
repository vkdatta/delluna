export const name="lucid_3-paper-bag";
export const id="dl_9dca327fd5d64a69a373";
export const url=new URL("../icons/lucid_3-paper-bag.svg?v=f9e0c1ced730914b18fe93e1006880d6070a3413980f513216da76fe082714c0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
