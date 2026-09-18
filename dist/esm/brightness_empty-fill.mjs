export const name="brightness_empty-fill";
export const id="dl_5a39cddbc06a4b189835";
export const url=new URL("../icons/brightness_empty-fill.svg?v=cf163cd51f930f57d93a5721760275785099091fe4d27d3de549cde6e540ca62",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
