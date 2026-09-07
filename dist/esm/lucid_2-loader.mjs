export const name="lucid_2-loader";
export const id="dl_f027c227f5444b3e9374";
export const url=new URL("../icons/lucid_2-loader.svg?v=0aea86fcf53cdabe2604979e7cb4a181580aba6a6ba1cbfa80956beb48078f8c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
