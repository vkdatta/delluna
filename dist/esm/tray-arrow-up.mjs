export const name="tray-arrow-up";
export const id="dl_c18b41583276e52708f0";
export const url=new URL("../icons/tray-arrow-up.svg?v=d12cf64d7f601134bda28bd1207d66a573acd77e61645f77d02ece0e4681a182",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
