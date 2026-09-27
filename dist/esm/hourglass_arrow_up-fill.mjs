export const name="hourglass_arrow_up-fill";
export const id="dl_f5e5d6c6955c19bb374f";
export const url=new URL("../icons/hourglass_arrow_up-fill.svg?v=9843084dc4394145a630516626746883d7bb4903e55e84dab4ccc2f1e07cef91",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
