export const name="male-fill";
export const id="dl_ecc6e52be04ec51efc37";
export const url=new URL("../icons/male-fill.svg?v=290c02f2747880e800f4053bed4eed505741e2f0de79060c1e08a7be31f5ca4a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
