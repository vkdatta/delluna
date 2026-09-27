export const name="view_quilt-fill";
export const id="dl_e00f696b5b38ea0769d9";
export const url=new URL("../icons/view_quilt-fill.svg?v=909d2abd300cacb08cccb2ff7a327f34d2faab50e11547ca787b3376b2291edb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
