export const name="align_vertical";
export const id="dl_2a8bf97a8f54498a9666";
export const url=new URL("../icons/all_60_named_svgs/align_vertical.svg?v=a2c4ae551d07f7ff8c8f3026740517a8240883fd0d621b9bc535876cc1a80850",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
