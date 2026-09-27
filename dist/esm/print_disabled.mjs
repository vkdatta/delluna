export const name="print_disabled";
export const id="dl_493ab2d90b9725563067";
export const url=new URL("../icons/print_disabled.svg?v=521827c869366b92081858aa51c99c8045ef9650d3a41e74f03fca23de88af19",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
