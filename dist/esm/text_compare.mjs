export const name="text_compare";
export const id="dl_3230aaf68b049e203490";
export const url=new URL("../icons/text_compare.svg?v=f723d2ff1dc3d72a8e215907515e3519f23936430aec0cefa6f1bc851e09659b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
