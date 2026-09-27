export const name="currency-krw-thin";
export const id="dl_de1fe99952d5404dad6d";
export const url=new URL("../icons/currency-krw-thin.svg?v=1df190335feb2cdd20d26a7a67ee0f04562538a8238561ce60f423d0f357521e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
