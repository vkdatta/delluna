export const name="devices_fold-fill";
export const id="dl_9eef5003380c44bcf40b";
export const url=new URL("../icons/devices_fold-fill.svg?v=762e44ec03e6d59a43d57bf4f35795bdce6f3bd908d533653a8f70cbd8bf6946",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
