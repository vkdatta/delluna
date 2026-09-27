export const name="wifi_add";
export const id="dl_83c51a3e70e83dcb51fe";
export const url=new URL("../icons/wifi_add.svg?v=29aad69edb051e1fd80dabe0e866d659231666858b6224b9364c521b080f4af7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
