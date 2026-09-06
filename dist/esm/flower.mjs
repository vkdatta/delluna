export const name="flower";
export const id="dl_febd66135fdf4aadaffc";
export const url=new URL("../icons/flower.svg?v=f97e3901a7afce79bf6e083eb59d4675a265ae683df630be897fbbf7f5c779c1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
