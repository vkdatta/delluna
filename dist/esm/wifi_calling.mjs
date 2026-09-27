export const name="wifi_calling";
export const id="dl_eebf8980571fd1e00f36";
export const url=new URL("../icons/wifi_calling.svg?v=d7ab196804fe6c5d0a7201c3e8e21c095b159bc1e5b288f1d2ff87ab8e63c04b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
