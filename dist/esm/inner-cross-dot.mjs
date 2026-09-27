export const name="inner-cross-dot";
export const id="dl_ce30b3dd8a6145d29388";
export const url=new URL("../icons/inner-cross-dot.svg?v=49327b4b9f1665ccf720cfa787eb404260d8c719553c228526f9a42bcd93d11f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
