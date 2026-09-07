export const name="trademark-registered-thin";
export const id="dl_7ef50103e9324f85ba19";
export const url=new URL("../icons/T/trademark-registered-thin.svg?v=b8cca0e4938dd7df6868228ba9ad7855bdcac7c56e8b544d711549ce684dda65",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
