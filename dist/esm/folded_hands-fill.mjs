export const name="folded_hands-fill";
export const id="dl_bc419c2250083973310b";
export const url=new URL("../icons/folded_hands-fill.svg?v=193f115641f5dbd4b7a38460efaa9a6077b42b595d6e7fbbbd9ef420be60c110",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
