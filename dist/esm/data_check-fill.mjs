export const name="data_check-fill";
export const id="dl_498016b8b534fe2939a5";
export const url=new URL("../icons/data_check-fill.svg?v=43ea43ebb03cfab7655520f64d3dcb7572b7243dbdb1dbf1ed7793c35c85132f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
