export const name="14mp";
export const id="dl_fac652926a1e6e691f52";
export const url=new URL("../icons/14mp.svg?v=5fe6873eaeb603a23937731c1123cdb799d12819eb0076528ba9a1ec28b8f29f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
