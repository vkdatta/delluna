export const name="dual_screen";
export const id="dl_2673a85344204c63e6d4";
export const url=new URL("../icons/dual_screen.svg?v=5e7db3905e5198f4f2574f99af5722e69136ccee7ca4fea9e6c397af8848fa73",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
