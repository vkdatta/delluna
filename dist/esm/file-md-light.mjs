export const name="file-md-light";
export const id="dl_d432269ed9bd4c2eafc4";
export const url=new URL("../icons/file-md-light.svg?v=4241722be242ed41715f1ac62d1cc79bf42e9aabd3bfcb31d3ee5f43871b5321",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
