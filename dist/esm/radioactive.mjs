export const name="radioactive";
export const id="dl_9d44402010e941cea5b1";
export const url=new URL("../icons/radioactive.svg?v=df28ecd41078b7bd0fce45323f55d6681ab1ea8e38e024071181b5e9f53032d3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
