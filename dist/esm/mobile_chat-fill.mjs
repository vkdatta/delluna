export const name="mobile_chat-fill";
export const id="dl_f9afefaba7ed49539fe2";
export const url=new URL("../icons/mobile_chat-fill.svg?v=b74d2759ed8c4fb46773b1880eb6530d168fe0d45398e3be22ae309532ccd146",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
