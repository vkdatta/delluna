export const name="line_start_square-fill";
export const id="dl_b0491e0360dfa80dccb2";
export const url=new URL("../icons/line_start_square-fill.svg?v=a1cad5f04a3df2883c35c33e7f876b6aa469e7e98b5e75a6ef527d2471a4a954",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
