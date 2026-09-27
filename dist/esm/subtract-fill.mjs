export const name="subtract-fill";
export const id="dl_1d811886bb1c0719cba1";
export const url=new URL("../icons/subtract-fill.svg?v=20cad28b68234fe8f282a4552c753c05617011156d793371e0e9c5f05cfe018d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
