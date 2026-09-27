export const name="counter_5";
export const id="dl_1b02943615563e4a4ff4";
export const url=new URL("../icons/counter_5.svg?v=7285e190ac3e6d4cc5d9ac245767114570769f1578b9283bc1df1c16162fab25",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
