export const name="playing_cards";
export const id="dl_464519da85e543bf6297";
export const url=new URL("../icons/playing_cards.svg?v=d456c4e69315587fe5e18274a4d6a9004ea2775c29a65d795fe09ecb84d5545d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
