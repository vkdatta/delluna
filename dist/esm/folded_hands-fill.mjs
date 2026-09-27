export const name="folded_hands-fill";
export const id="dl_82cd2dc41ce5db829cca";
export const url=new URL("../icons/folded_hands-fill.svg?v=365d6a211dfa478ffddc98e6896c43049c9c91ecdfe1af3b6b1116c551fb55c5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
