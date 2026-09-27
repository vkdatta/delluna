export const name="nest_farsight_seasonal-fill";
export const id="dl_4115aba40e942aaa0c4f";
export const url=new URL("../icons/nest_farsight_seasonal-fill.svg?v=4b6e6c89789810d31ee726c3d2c09a2766fd718233ac8fe37f9845201584b555",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
