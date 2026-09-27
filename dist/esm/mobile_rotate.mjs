export const name="mobile_rotate";
export const id="dl_b19449d98fcf50f44448";
export const url=new URL("../icons/mobile_rotate.svg?v=e89ef25f336f8e8e64ab69123d99c759f9de819d6603d8345e36a34b24985cbc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
