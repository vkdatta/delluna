export const name="stool-light";
export const id="dl_0cf84801c484ab406c6b";
export const url=new URL("../icons/stool-light.svg?v=3b1ab6b00cf8ce41c6499e4c6a0b5b92cd42c1301a451c83cad24fa16f783e90",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
