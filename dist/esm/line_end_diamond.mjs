export const name="line_end_diamond";
export const id="dl_0d282b0556396319254e";
export const url=new URL("../icons/line_end_diamond.svg?v=8c0af54494e3643aca4c5cc0bc385e2c1a287e1bed23402c05b42c01f2bb0c77",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
