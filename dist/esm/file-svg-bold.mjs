export const name="file-svg-bold";
export const id="dl_649ad8b9092d42c691d0";
export const url=new URL("../icons/file-svg-bold.svg?v=02e2729500b8f78ede5b7770e380593b6e946fb6df5a6715fa9832077248bfc0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
