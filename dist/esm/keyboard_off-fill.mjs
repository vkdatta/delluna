export const name="keyboard_off-fill";
export const id="dl_361f982d0293c9bb7b65";
export const url=new URL("../icons/keyboard_off-fill.svg?v=ca6a5f982a320a18ceb1dc0285d4ab853529e3de7e65d9cf6f4ebd08b5a440b1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
