export const name="lucid_3-pyramid";
export const id="dl_22d280d58bed4305b184";
export const url=new URL("../icons/lucid_3-pyramid.svg?v=0f0207fe916291b608c3f000204c0baa399c136861361e86b998b562a4d76356",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
