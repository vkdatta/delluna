export const name="important_devices";
export const id="dl_7f95d6d41a0a9c91d570";
export const url=new URL("../icons/important_devices.svg?v=05ebd403c8b2fe9e608cc6cfd3c4bb202055d9ef266fe895b8d230106d45ca2d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
