export const name="chart-scatter-light";
export const id="dl_608094f264bc4df4ad35";
export const url=new URL("../icons/chart-scatter-light.svg?v=dd91a29f58cc6205813501ba96b5d49f013f3e85d36c033ed3c800f468fd0abe",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
