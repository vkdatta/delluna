export const name="hard-drives-fill";
export const id="dl_79dca56a59484dd3afa0";
export const url=new URL("../icons/hard-drives-fill.svg?v=16f26a807a05ded561ff3322879e698b70d77f07df5dabda451825ddd8f5ba28",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
