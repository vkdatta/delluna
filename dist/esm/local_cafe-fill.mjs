export const name="local_cafe-fill";
export const id="dl_85e20bc6d6cf922c4efb";
export const url=new URL("../icons/local_cafe-fill.svg?v=41c6ec1015eca7f9c5c1abb32142f263ec98027380858889d9b7966c3c4eec76",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
