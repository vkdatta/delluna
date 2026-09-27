export const name="steps-light";
export const id="dl_60d3f5951bc70ba3e8a0";
export const url=new URL("../icons/steps-light.svg?v=4b29b279b100064ede389ff004740ba54c30d3812683c58ebdd31a0e719ca791",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
