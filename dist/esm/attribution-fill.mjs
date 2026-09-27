export const name="attribution-fill";
export const id="dl_931ad1fad28787b92b61";
export const url=new URL("../icons/attribution-fill.svg?v=4a5ca7db079c82773ab7ab5bda241d566c42e341758592a245dc007d340dee80",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
