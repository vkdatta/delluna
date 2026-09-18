export const name="key_visualizer-fill";
export const id="dl_f25f172a75c24daeb106";
export const url=new URL("../icons/key_visualizer-fill.svg?v=e6eaab11781ef476fb03c90f8946dd5fe59875852fefaec687f0ef7e30ef1f6d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
