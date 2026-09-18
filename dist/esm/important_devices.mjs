export const name="important_devices";
export const id="dl_3f8b438f6cc046ddae9f";
export const url=new URL("../icons/I/important_devices.svg?v=89be6ad35727a6a2681771a212c95bace147bf14e765741d68afc7c6b2fc38d7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
