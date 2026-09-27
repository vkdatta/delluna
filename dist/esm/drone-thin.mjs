export const name="drone-thin";
export const id="dl_1d39b50a11754d8a8799";
export const url=new URL("../icons/drone-thin.svg?v=067752c59bc1b25fd631357d5b54c009b62ac000a3602ea04425d9cbbc79efe3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
