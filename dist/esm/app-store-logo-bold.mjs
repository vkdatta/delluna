export const name="app-store-logo-bold";
export const id="dl_412ba5689fa348d1992b";
export const url=new URL("../icons/app-store-logo-bold.svg?v=bb8804683f1117312932c7f0447b83f52d1811743010325e81177f91ea577125",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
