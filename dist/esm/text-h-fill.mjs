export const name="text-h-fill";
export const id="dl_f957ad298eeddbce1305";
export const url=new URL("../icons/text-h-fill.svg?v=90d41323ffaeeebe22474c4bf1c250e50e964e1518e5b5a2b173a85dd8547637",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
