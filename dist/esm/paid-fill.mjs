export const name="paid-fill";
export const id="dl_a246a764653eaedcff61";
export const url=new URL("../icons/paid-fill.svg?v=4aa62f28adf39d39cb306e42fb5ce3012692029eab5c74fa5839b828a8d94419",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
