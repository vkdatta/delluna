export const name="ny-times-logo-duotone";
export const id="dl_69176c759ff7439786c3";
export const url=new URL("../icons/ny-times-logo-duotone.svg?v=01c9f02d1e679762869deb727e95a6afda14d3840a9d2cf1798eb595550868ec",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
