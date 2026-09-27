export const name="landscape_2_edit";
export const id="dl_f5b494284c7291589415";
export const url=new URL("../icons/landscape_2_edit.svg?v=be394492504db1c8037af960105f391ab902ad8187db9528653a1a6a8e616be1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
