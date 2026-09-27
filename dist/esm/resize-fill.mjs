export const name="resize-fill";
export const id="dl_859d3938e4f34041b63f";
export const url=new URL("../icons/resize-fill.svg?v=911aab846983b015b5c8fd1b6d09346869881329e5109c8b2ffff49fe45e22f4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
