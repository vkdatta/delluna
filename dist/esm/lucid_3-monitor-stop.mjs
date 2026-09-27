export const name="lucid_3-monitor-stop";
export const id="dl_7c209dcb486a4aeb8c85";
export const url=new URL("../icons/lucid_3-monitor-stop.svg?v=593abd69686a1605eb2d29d87ecb47b90bfbef12aaefb61abfc568df80d8853c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
