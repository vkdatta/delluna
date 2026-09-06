export const name="keyboard-duotone";
export const id="dl_00b8772d08424df9909d";
export const url=new URL("../icons/keyboard-duotone.svg?v=4484955d19ca1e9054e2b9faf9085c34dd8292d18dd01090c6873205d0817b1b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
