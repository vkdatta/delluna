export const name="speed_3-fill";
export const id="dl_da32d7594dbd4b0a8af0";
export const url=new URL("../icons/speed_3-fill.svg?v=dd91cfb8d2d8891023df2312f8183256b6eef086f076eae10cc848138bc2fef7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
