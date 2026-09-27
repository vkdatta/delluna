export const name="tab_duplicate";
export const id="dl_0be8220c6b74e5eb6472";
export const url=new URL("../icons/tab_duplicate.svg?v=3bd4c86f9a3f6c420d5f60fb3a5b3966852c1e67312639d776fb4ebd5486fbfe",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
