export const name="expand_all-fill";
export const id="dl_f36f46d82a0ff1fb7d52";
export const url=new URL("../icons/expand_all-fill.svg?v=654624f1cc5bd68e43a3dccc934977a068c78d933e6128442df79fa8d6cbe045",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
