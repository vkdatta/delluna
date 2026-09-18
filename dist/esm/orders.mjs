export const name="orders";
export const id="dl_cdb6a2e1475e4b059129";
export const url=new URL("../icons/orders.svg?v=4096fffd023a086422158a5053b309557d7c1b4da66c14d21de55117c49b6b1e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
