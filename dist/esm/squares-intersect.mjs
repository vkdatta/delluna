export const name="squares-intersect";
export const id="dl_d7014c6be2fd499a8457";
export const url=new URL("../icons/squares-intersect.svg?v=94a81a4495f6225aa1f5f65bae15715bdf2b367265cc4d25cc704a688a45b452",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
