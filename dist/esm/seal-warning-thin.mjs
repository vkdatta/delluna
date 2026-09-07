export const name="seal-warning-thin";
export const id="dl_7222788ace06418988a7";
export const url=new URL("../icons/S/seal-warning-thin.svg?v=53ef09dcf127ae1a4fdaaf127b6e21f3aafc659ddef5fbfa817779f87cd63ec9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
