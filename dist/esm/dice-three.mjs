export const name="dice-three";
export const id="dl_f97ecc84457c4fa992ba";
export const url=new URL("../icons/dice-three.svg?v=08dafd71d9275b64f6b41c444d826f47a9a0de47412587aef46203244444db82",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
