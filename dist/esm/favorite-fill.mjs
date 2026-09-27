export const name="favorite-fill";
export const id="dl_8e18c00ce10fa0071e2f";
export const url=new URL("../icons/favorite-fill.svg?v=37127b6e31cc3eaa3691446afaea03663e15a4ad77dafe4a45d69f6bd20398c3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
