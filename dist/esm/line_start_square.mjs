export const name="line_start_square";
export const id="dl_b5eb11f04feacf54edb0";
export const url=new URL("../icons/line_start_square.svg?v=6c6b097da45b47b2490f6815a040d9bec50e2a0de2d7b57d329cee76974f9637",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
