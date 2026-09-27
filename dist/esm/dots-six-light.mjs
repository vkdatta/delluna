export const name="dots-six-light";
export const id="dl_b0126d38f0b649998371";
export const url=new URL("../icons/dots-six-light.svg?v=6dbcd3b4d63c9ec41edc76d6e0bd449ef449521f894f797babe46146cbfb132a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
