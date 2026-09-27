export const name="lucid_3-message-circle-code";
export const id="dl_82febc8be8cb4b80bc3a";
export const url=new URL("../icons/lucid_3-message-circle-code.svg?v=05836e04f1ba70982932b42ffd49b4c8f4929d2f741bbdd8fb483648c940213d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
