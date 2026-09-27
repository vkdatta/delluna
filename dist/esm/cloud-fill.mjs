export const name="cloud-fill";
export const id="dl_b18856b2b0f848dda552";
export const url=new URL("../icons/cloud-fill.svg?v=cdce9efcb508046a6d931268a73a4ccc96440d7a84580c3b8cccac1705065c80",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
