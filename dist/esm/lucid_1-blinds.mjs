export const name="lucid_1-blinds";
export const id="dl_16ce83cc18a1466e9917";
export const url=new URL("../icons/lucid_1-blinds.svg?v=28277c478f862d70540afeab8a9435860925c9650f00395ea917abef7a7aca28",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
