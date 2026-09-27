export const name="sd_card-fill";
export const id="dl_72e7d609a79b73876bff";
export const url=new URL("../icons/sd_card-fill.svg?v=124b078e1d76bd679b9e3ac163372637b00a4474d9da3b9c31896024d8062e17",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
