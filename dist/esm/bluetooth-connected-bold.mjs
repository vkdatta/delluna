export const name="bluetooth-connected-bold";
export const id="dl_3ea0c7ea119247568471";
export const url=new URL("../icons/bluetooth-connected-bold.svg?v=b0003deb9eab10f183d28eeece0e478bb041995a7ea80f04f8e73e8f7d0aa222",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
