export const name="nightlight";
export const id="dl_cc6e901307f8d3ee6f89";
export const url=new URL("../icons/nightlight.svg?v=eaebbeb1b6411d0dea1d8693fb5bd4a536f86b198fe5e6c3b38303a3c4a17b78",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
