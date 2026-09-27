export const name="cursor-duotone";
export const id="dl_27cc6ecff1df468ba0c3";
export const url=new URL("../icons/cursor-duotone.svg?v=2af8ea4c9b1187a3e4540beac6ebc956fca456da27b3ce1203b2df7b5e03f90f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
