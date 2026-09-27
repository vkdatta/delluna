export const name="endocrinology-fill";
export const id="dl_340cda29c855e4636f89";
export const url=new URL("../icons/endocrinology-fill.svg?v=d3d3aca3101d41187cd4d17519a1fdda5e01fdd031fce1332eea421bc7c91dd1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
