export const name="hammer-fill";
export const id="dl_59ce79513fc84ad8ac6e";
export const url=new URL("../icons/hammer-fill.svg?v=b7804cccced9a2972c2960032b3f80f7625c7e85bbc8115ed2aada687e266048",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
