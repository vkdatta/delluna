export const name="dashboard_customize";
export const id="dl_f8926b4a253d47c5a537";
export const url=new URL("../icons/D/dashboard_customize.svg?v=4735edd024b1946facff6fa430d8bb417b5a612682f5eec6411a5012ee2f1dc2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
