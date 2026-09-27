export const name="grading-fill";
export const id="dl_2cc2891e5a4b28a9ca76";
export const url=new URL("../icons/grading-fill.svg?v=256f2f4209b0354bd80bccfe98ce19ead5a07a6c0aa6aba725efc3c5b6aec10f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
