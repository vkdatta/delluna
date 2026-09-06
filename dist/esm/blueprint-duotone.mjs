export const name="blueprint-duotone";
export const id="dl_ea0492c0d1f245a88af2";
export const url=new URL("../icons/blueprint-duotone.svg?v=e26064270a1b6455e18e84e585a26cde27f4f0c9cc5420b9e1f6f03ee31d793f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
