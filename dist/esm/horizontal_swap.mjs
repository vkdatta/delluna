export const name="horizontal_swap";
export const id="dl_98fed5edd9ad41279fcd";
export const url=new URL("../icons/horizontal_swap.svg?v=a7367886b823e4ad4a5bb658f7fb350347d15816dfd3e03852b9cea0d51926d5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
