export const name="sd";
export const id="dl_5d8444fd52e83f238c96";
export const url=new URL("../icons/sd.svg?v=ed917c687d972a145a46c10ed07dfccb3137a0d3323c5a3db8cdbaac79885ec3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
