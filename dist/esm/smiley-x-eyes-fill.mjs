export const name="smiley-x-eyes-fill";
export const id="dl_32aad1ba8074ec84ff64";
export const url=new URL("../icons/smiley-x-eyes-fill.svg?v=f029fd219ee9f60c53a7b8f88446452ef4340c1946786883bab9285e48ffd4d3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
