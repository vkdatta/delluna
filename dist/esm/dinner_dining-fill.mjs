export const name="dinner_dining-fill";
export const id="dl_de629a716d35720280f5";
export const url=new URL("../icons/dinner_dining-fill.svg?v=ba18dfd507732b60047bd7e40d60767e85fb24f6644d26fe874a5e40a6f13ffa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
