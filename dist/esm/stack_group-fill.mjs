export const name="stack_group-fill";
export const id="dl_3fb95a557e0a22c9e3c7";
export const url=new URL("../icons/stack_group-fill.svg?v=ad979e49dce74d643fef3f43d95ce0f8df8c547a796aa0ea5da98893134a63d0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
