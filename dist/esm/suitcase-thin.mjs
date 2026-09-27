export const name="suitcase-thin";
export const id="dl_684afb9f6eedfec92c74";
export const url=new URL("../icons/suitcase-thin.svg?v=4b8756bdede136eb4c51b31656cf9e522b2cc251a81549f0a17b03600970acaa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
