export const name="detective-thin";
export const id="dl_9140e42765ff4374a0aa";
export const url=new URL("../icons/detective-thin.svg?v=f0e7401f78502ac972bad250f5c24e4aae1344e6d424d3c92ec604c90c551791",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
