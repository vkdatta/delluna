export const name="heart-straight-break-fill";
export const id="dl_f7e4ec0bedde425387b2";
export const url=new URL("../icons/heart-straight-break-fill.svg?v=bd3a89806c6978f4495b092b88028ace967b34fa6cf31f4a5cc89c7ea5003698",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
