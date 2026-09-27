export const name="no_flash";
export const id="dl_46f478b7bf0e7507471c";
export const url=new URL("../icons/no_flash.svg?v=0784d26f3e5705e13e86349df279886458d3392a9528466a5f030c70ad8ab7e8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
