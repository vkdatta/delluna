export const name="barcode";
export const id="dl_3231ed7ec3844d44a3d2";
export const url=new URL("../icons/barcode.svg?v=17cdda95c9232b0f9db68047d1fa835383bc9503d9800452a77a4bc3d302f2f7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
