export const name="jar-duotone";
export const id="dl_2c9560aa7b9047e1b8f6";
export const url=new URL("../icons/jar-duotone.svg?v=9b8503f96cfba11427a7539de989d8c7aa721234aaab0c7979bf66badf448e29",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
