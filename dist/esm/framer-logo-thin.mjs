export const name="framer-logo-thin";
export const id="dl_eefff701a2a04f969b3e";
export const url=new URL("../icons/framer-logo-thin.svg?v=202d3953a8b0f9e3263c5659b9f741e20b2f2d65400b8b3fedcf37a5aea0f5c0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
