export const name="tree-palm-duotone";
export const id="dl_480342cbd9390d8061a7";
export const url=new URL("../icons/tree-palm-duotone.svg?v=01e25cc5af3646bae0aa2ed6fd9d201d8177edc84b522e1ce7625030ac0add88",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
