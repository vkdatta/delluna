export const name="child_friendly-fill";
export const id="dl_421c2b13b9465fd4dbae";
export const url=new URL("../icons/child_friendly-fill.svg?v=9efc67abe4988e7abef7a98d786facfd7e545ad8e26a9344a7642eb0852ada1a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
