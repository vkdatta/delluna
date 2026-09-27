export const name="network-bold";
export const id="dl_73f9f3cad2d0490a8946";
export const url=new URL("../icons/network-bold.svg?v=3a8c9ceda222f59065bfcf81bcd4f9e80c615cf3019d30ac0d6bc8615c46e513",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
