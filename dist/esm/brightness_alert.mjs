export const name="brightness_alert";
export const id="dl_cdb09b9da60585d3d167";
export const url=new URL("../icons/brightness_alert.svg?v=ef967f76cb70d648f224ffe15ba6f3106779123331d0d9a7270cacd674fd1b1f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
