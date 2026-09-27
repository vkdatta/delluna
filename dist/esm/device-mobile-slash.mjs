export const name="device-mobile-slash";
export const id="dl_10a39e5c0cb349c28271";
export const url=new URL("../icons/device-mobile-slash.svg?v=e9ff957b5b74ebc8bd339ec7bcce9e6ce80c75825b84e308a1c2149c14051dad",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
