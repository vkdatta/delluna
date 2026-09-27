export const name="g_mobiledata_badge-fill";
export const id="dl_f5ba7d6fe512137b1f86";
export const url=new URL("../icons/g_mobiledata_badge-fill.svg?v=c043e5e37601ab36a308fc4404687d28193964bf295ef1837f427bb89f5b153b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
