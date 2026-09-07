export const name="soccer-ball";
export const id="dl_24a1810d1cad4998b7df";
export const url=new URL("../icons/S/soccer-ball.svg?v=32f4b1b42d041b9b7ba35cd16230bcb478955259df609402ffd96ea731d115a3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
