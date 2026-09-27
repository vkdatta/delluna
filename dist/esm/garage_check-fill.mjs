export const name="garage_check-fill";
export const id="dl_4ace405ea76b75778630";
export const url=new URL("../icons/garage_check-fill.svg?v=fc7a8ff4530b2b3dfaa3b3565d1e0fc4e6afa347f66040cd84b1098f3a451e86",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
