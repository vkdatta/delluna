export const name="eyeglasses-bold";
export const id="dl_2f1a705525d4478f9548";
export const url=new URL("../icons/eyeglasses-bold.svg?v=0474ab4c219c7518cbdf3ea7a6f378341a523d90b2bd4df1a89b0eaab33ea044",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
