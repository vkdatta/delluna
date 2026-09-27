export const name="pencil-simple-line-duotone";
export const id="dl_c9ac1f2865e34b5c9e2b";
export const url=new URL("../icons/pencil-simple-line-duotone.svg?v=853621179cbb4c3a36ffdd6bb36b114d8787e182c73032cd41c548e19f76cab5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
