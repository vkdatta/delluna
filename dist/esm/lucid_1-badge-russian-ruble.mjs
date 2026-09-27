export const name="lucid_1-badge-russian-ruble";
export const id="dl_ad021f9314ed4189b150";
export const url=new URL("../icons/lucid_1-badge-russian-ruble.svg?v=9c2bb6af113cbafb7bd171b0db775d1db12ee58d8d158ebc3d27c0098a7c7162",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
