export const name="rainbow-cloud-thin";
export const id="dl_539a1e91f8364d809ee8";
export const url=new URL("../icons/rainbow-cloud-thin.svg?v=f856171f4d777e0ce761b7a20f83fe449f1df650374515c581c8846bfbb661a2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
