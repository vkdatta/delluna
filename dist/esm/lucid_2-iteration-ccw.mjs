export const name="lucid_2-iteration-ccw";
export const id="dl_953dbc6fe9f146cbbf49";
export const url=new URL("../icons/lucid_2-iteration-ccw.svg?v=1c328766a7bce9971c01e1817b51434defccaa790719138d62e6c9c9777760a5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
