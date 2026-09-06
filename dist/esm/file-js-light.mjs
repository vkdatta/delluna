export const name="file-js-light";
export const id="dl_ae8c20e91f7342b9995c";
export const url=new URL("../icons/file-js-light.svg?v=b1f19ad6b8f0c525e72c04db819d0f0c9cdcd86ec94d25b3ca61558bf3c0e78f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
