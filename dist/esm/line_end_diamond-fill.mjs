export const name="line_end_diamond-fill";
export const id="dl_31dcf31cb902ab0ae717";
export const url=new URL("../icons/line_end_diamond-fill.svg?v=582fbe0215fcb15cfabebea5234646acc58c27b036b7da3c129f75bfbdd04e7b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
