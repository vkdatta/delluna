export const name="wheelchair-motion-light";
export const id="dl_9400ef0b971f413a8dba";
export const url=new URL("../icons/W/wheelchair-motion-light.svg?v=181e6a85dae534f7ccf86cd7adb0b5d7f8d06f4512a4e0ff83ffb2eebf135be1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
