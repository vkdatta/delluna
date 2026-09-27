export const name="wifi_calling_bar_2";
export const id="dl_26dbe951f43f62ba7712";
export const url=new URL("../icons/wifi_calling_bar_2.svg?v=c8f454f12586c6f9d0a69dfc6c05360290ffab587b91dad86284b88b960361fa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
