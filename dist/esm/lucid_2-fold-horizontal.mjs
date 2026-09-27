export const name="lucid_2-fold-horizontal";
export const id="dl_3958c29e3abb46c28a06";
export const url=new URL("../icons/lucid_2-fold-horizontal.svg?v=0cb9f32ddc2d7cfdd022a2a93712cdd58a260d37796b2344b4e74dc6da3ca223",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
