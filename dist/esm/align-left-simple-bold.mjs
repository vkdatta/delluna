export const name="align-left-simple-bold";
export const id="dl_569008a6dead4edeaee7";
export const url=new URL("../icons/align-left-simple-bold.svg?v=96244357af9d721b883c3ddcabc76ee15305cb9ecd157f8ee08638302c995805",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
