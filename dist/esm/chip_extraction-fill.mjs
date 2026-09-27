export const name="chip_extraction-fill";
export const id="dl_23b1fbe7215d99d36d31";
export const url=new URL("../icons/chip_extraction-fill.svg?v=4e1d05b4f2152b8d7c1deffcaab02626a87b2b1a3cc0707d71d944736f553f6a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
