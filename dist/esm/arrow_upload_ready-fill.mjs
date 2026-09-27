export const name="arrow_upload_ready-fill";
export const id="dl_958de8c831123cb51bd7";
export const url=new URL("../icons/arrow_upload_ready-fill.svg?v=e2aa780f06f1d71688116e87c43dd316a94fd4916a229e8802d07916711c2d31",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
