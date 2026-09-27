export const name="lucid_2-cross";
export const id="dl_b4beae219421476e9c6a";
export const url=new URL("../icons/lucid_2-cross.svg?v=f08b9a6b28f177062866856eb3828e45b5c02e81c3e3d2fe38eaeda7ff4cb8f2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
