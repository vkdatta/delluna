export const name="circle-dashed-duotone";
export const id="dl_a08c2248e7cf4465b518";
export const url=new URL("../icons/circle-dashed-duotone.svg?v=3263c633284b3c2f56c1397927748ef68fd18a1f262744425ce6b8f9a923c845",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
