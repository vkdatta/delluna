export const name="output_circle-fill";
export const id="dl_6355eeb3d9857a6be8ad";
export const url=new URL("../icons/output_circle-fill.svg?v=f580dab2dee1b874c6885cba44c95d472abe9792b2d3534ff8d3b9dc60a22505",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
