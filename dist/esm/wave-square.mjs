export const name="wave-square";
export const id="dl_0c7302cfdf72a5cc2fbb";
export const url=new URL("../icons/wave-square.svg?v=398f44ff6569f5441a67f96e4ec60b3c33084d2970cbee494ecebd1885442ee9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
