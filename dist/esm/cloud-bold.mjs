export const name="cloud-bold";
export const id="dl_1f741727968641bcba7e";
export const url=new URL("../icons/cloud-bold.svg?v=e7a4dcc3458e07de80e0b411faef905e8b60316f970915bc15912a44c3eabf7f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
