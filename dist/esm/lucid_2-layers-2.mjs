export const name="lucid_2-layers-2";
export const id="dl_9c04083a21c1498eac1d";
export const url=new URL("../icons/lucid_2-layers-2.svg?v=e4bb04202842214a9b1d75502e59760e9c5ab9a2ba5e41c7d825318a8bacb77f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
