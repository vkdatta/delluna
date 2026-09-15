export const name="docs_add_on";
export const id="dl_35d20fbd8f284838b48f";
export const url=new URL("../icons/D/docs_add_on.svg?v=3a666bb183458aad130cc31574cb43a0ef93bfc77e306cfec410b55593de3797",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
