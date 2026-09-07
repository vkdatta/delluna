export const name="lucid_3-message-circle-code";
export const id="dl_82febc8be8cb4b80bc3a";
export const url=new URL("../icons/lucid_3-message-circle-code.svg?v=e9f4d9378bad40af7fc40dda5504a71239599ab95724fd51b602ef8584e37a46",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
