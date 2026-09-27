export const name="desktop-light";
export const id="dl_c4053667c92c45c8aad1";
export const url=new URL("../icons/desktop-light.svg?v=068c42eea1a3809198b9285aaecce3fd8e0702b91b63815f4b2e370df604d200",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
