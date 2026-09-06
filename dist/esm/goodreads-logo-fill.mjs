export const name="goodreads-logo-fill";
export const id="dl_6346b5ce32f4488ab7c2";
export const url=new URL("../icons/goodreads-logo-fill.svg?v=73d58db164ef9ead627a2f4cbc69fc9a666ad5077ebbd1089833a72d769ceffb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
