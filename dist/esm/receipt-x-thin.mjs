export const name="receipt-x-thin";
export const id="dl_0393d60f7bc740dfb843";
export const url=new URL("../icons/receipt-x-thin.svg?v=d8c29a0336bbc33fc46f6e8bba27955519afb28ec801d993151d86ff470f9048",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
