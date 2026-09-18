export const name="blanket";
export const id="dl_0b21d625e7e0449da757";
export const url=new URL("../icons/blanket.svg?v=69540f5c7d0e45db09a2bf496cdc04907e2f392aa0712eaaecad7ca513892c79",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
