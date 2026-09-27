export const name="sword_rose-fill";
export const id="dl_b774d164d7fdf36a7968";
export const url=new URL("../icons/sword_rose-fill.svg?v=e51eb46837498e71018b60942b0095eeef90f96765af09f0c4088760128ca0dc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
