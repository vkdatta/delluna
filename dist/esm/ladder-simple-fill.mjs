export const name="ladder-simple-fill";
export const id="dl_26a36c85399f44859614";
export const url=new URL("../icons/ladder-simple-fill.svg?v=f8e86bcde003af4d5ba2e85f9a7168915f68b47777c13aa26b7d1e4b4199d1f9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
