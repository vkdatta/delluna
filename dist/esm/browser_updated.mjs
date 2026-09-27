export const name="browser_updated";
export const id="dl_a63b21ce219482f30473";
export const url=new URL("../icons/browser_updated.svg?v=f126abf1715e9f559b4b273997038ea11a8a3aa5b39cb2dd0e761db19604d8fb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
