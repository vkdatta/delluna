export const name="selection";
export const id="dl_1433dcf2bcf4f2022593";
export const url=new URL("../icons/selection.svg?v=e9199a00499e43b0fb88096f2af130d80cb1f6115bb8a0a6b59eeca003b056a6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
