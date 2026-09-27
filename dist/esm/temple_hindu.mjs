export const name="temple_hindu";
export const id="dl_faa18a27a245f9faefe1";
export const url=new URL("../icons/temple_hindu.svg?v=c78626d037299e6848f649bf9657d98ddb42d9720b534ba009a3444fd5bf8135",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
