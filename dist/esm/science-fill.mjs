export const name="science-fill";
export const id="dl_a5e66289e7e007c48218";
export const url=new URL("../icons/science-fill.svg?v=e7bd9a2846a1d1939f9bb36f78bf18a429ededed841f2b613272ae7620470190",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
