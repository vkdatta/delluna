export const name="do_not_step-fill";
export const id="dl_51ca1bd7d312e410e0ec";
export const url=new URL("../icons/do_not_step-fill.svg?v=8e8033eaf11ca30c7f7f4de87e3f41de24246f6035e566120b7df6e305d5890e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
