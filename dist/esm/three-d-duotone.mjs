export const name="three-d-duotone";
export const id="dl_ea38cd2e7a9041d8b415";
export const url=new URL("../icons/T/three-d-duotone.svg?v=11bfb26728d30903d8eb5af3a95fbb5a3c031aa541c36077f8e167d877011e83",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
