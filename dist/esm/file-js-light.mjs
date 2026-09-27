export const name="file-js-light";
export const id="dl_ae8c20e91f7342b9995c";
export const url=new URL("../icons/file-js-light.svg?v=48d6a4da9c5c3fd6b882494ddf95a1220d54501e2cf03337a865e4352079a524",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
