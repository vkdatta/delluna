export const name="media_output-fill";
export const id="dl_d2dc4546af654113b76b";
export const url=new URL("../icons/M/media_output-fill.svg?v=3a61aa2d367776757edda09a251fa32dc44ccc875f4f6d70afeb0d56f65267f2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
