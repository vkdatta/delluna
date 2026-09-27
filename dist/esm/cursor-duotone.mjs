export const name="cursor-duotone";
export const id="dl_27cc6ecff1df468ba0c3";
export const url=new URL("../icons/cursor-duotone.svg?v=1d564d89d3caf8da0e4d11373d47aa2d166bc54f7df32b7a6ee40f658dac6561",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
