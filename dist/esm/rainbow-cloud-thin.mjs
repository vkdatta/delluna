export const name="rainbow-cloud-thin";
export const id="dl_539a1e91f8364d809ee8";
export const url=new URL("../icons/rainbow-cloud-thin.svg?v=7372e0a6f3bedc9f5a9dec15b3bd3d1df2ec31a4543c360a0ce928713f55f00d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
