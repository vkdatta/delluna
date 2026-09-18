export const name="quick_reference_all-fill";
export const id="dl_b33b16a0c8d44a2fab0c";
export const url=new URL("../icons/quick_reference_all-fill.svg?v=62d1fdf77817a4436bd00d9118dc0b45e2023a899a866ec5738d04c89dc1b0f6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
