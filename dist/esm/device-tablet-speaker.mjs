export const name="device-tablet-speaker";
export const id="dl_4b5e78da52064728bdf4";
export const url=new URL("../icons/device-tablet-speaker.svg?v=4cdb950078c116a1b0ffac4452236b02247f85864cee8ba0663409e59e6f6114",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
