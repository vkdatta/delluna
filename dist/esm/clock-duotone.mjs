export const name="clock-duotone";
export const id="dl_47f64d54d85240c5bd8e";
export const url=new URL("../icons/clock-duotone.svg?v=430dcadd0769205e98842a553f8f79d3c03efa1ecc914a450d8d9e390a56c23c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
