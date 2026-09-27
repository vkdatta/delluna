export const name="cube-light";
export const id="dl_4579d6932fb5486c88d6";
export const url=new URL("../icons/cube-light.svg?v=c58b37dd474388a9b4803d210d96935faea36ffab6bf0a6fc11fe40ea22429d1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
