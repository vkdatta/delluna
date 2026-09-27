export const name="soba";
export const id="dl_d6fc17bc6ff319321935";
export const url=new URL("../icons/soba.svg?v=676895132d5e17e82c76f9ed5d0d8b595a5ce1dfad4684a4902663b56828b5b6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
