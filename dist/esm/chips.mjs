export const name="chips";
export const id="dl_13f0e1b771521f90a371";
export const url=new URL("../icons/chips.svg?v=1c3159aa497bf2e3d7cf79a0a3a4e8127a919175623bc05882200651348418ba",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
