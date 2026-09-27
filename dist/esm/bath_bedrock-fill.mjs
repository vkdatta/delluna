export const name="bath_bedrock-fill";
export const id="dl_04a830299f9e7a93b1eb";
export const url=new URL("../icons/bath_bedrock-fill.svg?v=c5d97f6bd6a759f346a6979d8eb8866b3f31d6e8f0fb6ebb27c7719a7430f35d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
