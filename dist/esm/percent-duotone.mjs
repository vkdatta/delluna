export const name="percent-duotone";
export const id="dl_0f20930a5b454b82afd7";
export const url=new URL("../icons/percent-duotone.svg?v=ddd148648d61bc0600f58891ac25ee0bfb66d04fc66056b600b971c74a4cdc9e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
