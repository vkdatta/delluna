export const name="dataset_linked";
export const id="dl_381d91556f0f49d6b111";
export const url=new URL("../icons/dataset_linked.svg?v=d5519cfdd73c8ef211d636f1a3548b6717b05d95444e0ff0ceeeadd51dd412c5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
