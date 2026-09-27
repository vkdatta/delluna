export const name="cat-duotone";
export const id="dl_8f53998a2b33413e916b";
export const url=new URL("../icons/cat-duotone.svg?v=21eaab4b5906d3cf9b004b87711a9e65ab14e0c3b93ac63f7875b92ed2c25ce2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
