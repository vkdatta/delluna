export const name="steps-light";
export const id="dl_0ee5f09d584946f788c7";
export const url=new URL("../icons/S/steps-light.svg?v=4b29b279b100064ede389ff004740ba54c30d3812683c58ebdd31a0e719ca791",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
