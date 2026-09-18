export const name="sd";
export const id="dl_29ea7510f6da40159a00";
export const url=new URL("../icons/sd.svg?v=ed917c687d972a145a46c10ed07dfccb3137a0d3323c5a3db8cdbaac79885ec3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
