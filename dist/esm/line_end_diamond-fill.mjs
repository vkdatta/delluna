export const name="line_end_diamond-fill";
export const id="dl_7b21f7e54d0f41629b2f";
export const url=new URL("../icons/line_end_diamond-fill.svg?v=b58b5e88e3bb5a8ad28ceaf97567b7df888e80b1b78d3e40368de8a70de0db61",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
