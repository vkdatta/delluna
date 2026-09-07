export const name="backspace";
export const id="dl_d71c9730fd21bfb0587d";
export const url=new URL("../icons/backspace.svg?v=1337f057ee007805414cfac4b283195d36a894569b3c0dfb8b4c5f738fdd2032",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
