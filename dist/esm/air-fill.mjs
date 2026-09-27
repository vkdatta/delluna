export const name="air-fill";
export const id="dl_86dece082fd2a67c2f64";
export const url=new URL("../icons/air-fill.svg?v=969848a45f916563a8cda011fc030232d5ac9b0fb8678b59eab6e0c50b62c16a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
