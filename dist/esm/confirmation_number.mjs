export const name="confirmation_number";
export const id="dl_0fde4eb70125432da5e2";
export const url=new URL("../icons/C/confirmation_number.svg?v=2221a7000c00a27519f22491a3d76ca752cce31073f6996bbe6978120376d107",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
