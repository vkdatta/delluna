export const name="density_large-fill";
export const id="dl_67e20bb2eead92e7ead3";
export const url=new URL("../icons/density_large-fill.svg?v=536f1d8d04c373be9a742114627bf14a5505ae9a76dca8d58c7a1605bf174e20",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
