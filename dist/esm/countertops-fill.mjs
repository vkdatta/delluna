export const name="countertops-fill";
export const id="dl_cb273a4a29280512a0f5";
export const url=new URL("../icons/countertops-fill.svg?v=e66e33c1394c4568bf7325380e74b858d0b7d8955a2bba913b6004b50c4beb17",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
