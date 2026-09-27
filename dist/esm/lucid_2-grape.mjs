export const name="lucid_2-grape";
export const id="dl_2905e7d009344883b005";
export const url=new URL("../icons/lucid_2-grape.svg?v=068b1f0aa73cec4f49ffef303244fc48be84d09b81ae35c0f774a704455bc19c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
