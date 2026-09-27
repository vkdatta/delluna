export const name="number-seven-fill";
export const id="dl_27e635101a464bf19d5c";
export const url=new URL("../icons/number-seven-fill.svg?v=b2065d1ce63d1e6f31750c41b02f1d065f817b9ad60fcb391c1b5533cd7005da",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
