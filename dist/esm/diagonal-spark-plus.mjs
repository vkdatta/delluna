export const name="diagonal-spark-plus";
export const id="dl_e12e2baf2cd35c523ba2";
export const url=new URL("../icons/diagonal-spark-plus.svg?v=46d0a380595bbb53b5eb361ea2b09cc7b40b7848e63695e94df3920c5ccee72a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
