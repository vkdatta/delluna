export const name="sneaker-thin";
export const id="dl_21d6aef6d88b7be87de2";
export const url=new URL("../icons/sneaker-thin.svg?v=43363bf38a3aa42b8465f617039c17c1b823c53f92973b1139a89bdf9081ea9e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
