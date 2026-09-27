export const name="bug-beetle";
export const id="dl_ead35ac7f54e49ef8eb3";
export const url=new URL("../icons/bug-beetle.svg?v=40e092344fe9cf4ba9b4aed02e7ed4aa8659b06cdc3caa888eb5e8243b671453",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
