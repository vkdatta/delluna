export const name="microsoft-powerpoint-logo-thin";
export const id="dl_88ef308686aa44d3bad8";
export const url=new URL("../icons/microsoft-powerpoint-logo-thin.svg?v=93fcd8755db374de95c23367e0188add9f6db39a63d0592cf1eb290734b232c2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
