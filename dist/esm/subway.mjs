export const name="subway";
export const id="dl_be2ed4acbda4e8767d31";
export const url=new URL("../icons/subway.svg?v=489074f0148bf196a947e59e9fdb891a0ed037b87cd58ba65bf84b4c9bf0e5e0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
