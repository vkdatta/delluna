export const name="lucid_1-cloud-upload";
export const id="dl_9616fa44a5bc424e8487";
export const url=new URL("../icons/lucid_1-cloud-upload.svg?v=a66eb82891c03402988a0e3a278b2f42ac8320f8137b69f02536ea0d30d7bd03",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
