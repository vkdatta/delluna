export const name="square-dashed";
export const id="dl_24485bd7bee04f51a1f9";
export const url=new URL("../icons/square-dashed.svg?v=114b0020d728155170e956b43ce282cec077466f4210cb4864e3a7608594a3de",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
