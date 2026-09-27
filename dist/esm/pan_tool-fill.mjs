export const name="pan_tool-fill";
export const id="dl_c5daf5b98f4cd88913ee";
export const url=new URL("../icons/pan_tool-fill.svg?v=90ab1ed13e31c8fbb807b5c5df6b5956d547f144022ebcaf8671ddcee86192ca",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
