export const name="unite-square-bold";
export const id="dl_99bcccc7a5ae9633d45f";
export const url=new URL("../icons/unite-square-bold.svg?v=01423043ce7c850f3013362ecdeb74a45fc66576f43999553dd60e9b849e887c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
