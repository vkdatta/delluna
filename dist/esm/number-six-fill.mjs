export const name="number-six-fill";
export const id="dl_c3a6f167c7e44b87b81a";
export const url=new URL("../icons/number-six-fill.svg?v=2483883e1aeba684ee85a210f123c9e606564aaf7bae440a7c124510dfabe23b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
