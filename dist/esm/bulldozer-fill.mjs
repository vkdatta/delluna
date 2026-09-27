export const name="bulldozer-fill";
export const id="dl_5bafb4f74db9407c92b3";
export const url=new URL("../icons/bulldozer-fill.svg?v=616657d123da034f7d14ea47c92d92a9a1899d42f7cbe3c2ecc12820535473e3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
