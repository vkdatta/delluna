export const name="queue-fill";
export const id="dl_de678065c1a74cc0befb";
export const url=new URL("../icons/queue-fill.svg?v=58dd187011746664e3cc347bc9c7b7a7cdc2591201e62667cbe2fd40cf6c8e23",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
