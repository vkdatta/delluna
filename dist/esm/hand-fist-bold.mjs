export const name="hand-fist-bold";
export const id="dl_a6206b2af9ef4c06be75";
export const url=new URL("../icons/hand-fist-bold.svg?v=cba6067a58199e1bf3b854ac4051aeeb5b4ba1b279f19ce68a85372605d4553c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
