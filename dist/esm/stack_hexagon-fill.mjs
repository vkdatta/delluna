export const name="stack_hexagon-fill";
export const id="dl_6b7edfed1619407384cd";
export const url=new URL("../icons/S/stack_hexagon-fill.svg?v=44157b4bf9ae72c7caefa0f9f28a42e30654df3004e8186df4285b532cf3daaf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
