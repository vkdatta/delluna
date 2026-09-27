export const name="squirrel";
export const id="dl_5a30065b4063424c86f1";
export const url=new URL("../icons/squirrel.svg?v=708bda245c8f898577171c83078742c3ce52f58372af657e4cba332ac5caf0b9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
