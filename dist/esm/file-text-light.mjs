export const name="file-text-light";
export const id="dl_17df532335814b8ba2bc";
export const url=new URL("../icons/file-text-light.svg?v=e81961193f6c56881de57efb6bec6583b6c1e5d0a060ff77b962ee140b1ea12e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
