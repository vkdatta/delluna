export const name="paper-plane-right-fill";
export const id="dl_44b8fc229ada4cc2b865";
export const url=new URL("../icons/paper-plane-right-fill.svg?v=a8e6f3a92755f1bc79bcfd691e794709bec6b13d68b948adc1eb035a2ddd8fff",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
