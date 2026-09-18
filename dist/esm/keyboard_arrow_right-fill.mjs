export const name="keyboard_arrow_right-fill";
export const id="dl_f7b076650527421c9750";
export const url=new URL("../icons/K/keyboard_arrow_right-fill.svg?v=1fbc733491fd8d381e25f7adfb7ae0c40a4086708f171a73d11422d320217475",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
