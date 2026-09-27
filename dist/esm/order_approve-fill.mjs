export const name="order_approve-fill";
export const id="dl_57ac7738447f588e1288";
export const url=new URL("../icons/order_approve-fill.svg?v=cc138131adcf4db48ae39ffe112841c34aa05f6f40e3d4fb0ab1840cd60c451e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
