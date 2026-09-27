export const name="arrow-line-up-right-duotone";
export const id="dl_cf817d30969d4e8b9e83";
export const url=new URL("../icons/arrow-line-up-right-duotone.svg?v=08e1d5da6050f4d5f6b272f79a4315214dcd54be54ea769cdc87d3f4cd96be9e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
