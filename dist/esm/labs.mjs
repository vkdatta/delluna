export const name="labs";
export const id="dl_b60489b2e4b06ed91002";
export const url=new URL("../icons/labs.svg?v=b23b9274a62581eef35d6ce010d78d1d5033c0eccdc85d808d998e55cfb660e2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
