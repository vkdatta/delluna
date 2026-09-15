export const name="eraser_size_4-fill";
export const id="dl_11268b0495af473f966b";
export const url=new URL("../icons/E/eraser_size_4-fill.svg?v=d89ffcc73247a60b56ecdcbdcf86ec61c3f3a37d209c4bb2ef6313c7a69e18b0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
