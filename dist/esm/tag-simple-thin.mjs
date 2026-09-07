export const name="tag-simple-thin";
export const id="dl_dbb7c3c00ae541fd9a2d";
export const url=new URL("../icons/T/tag-simple-thin.svg?v=62c9632a8f719e3580d54bfec533dc7b86d3f961675c356eb6467a99db190764",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
