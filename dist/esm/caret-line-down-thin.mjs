export const name="caret-line-down-thin";
export const id="dl_9b5762d9187b49b6967a";
export const url=new URL("../icons/caret-line-down-thin.svg?v=418e8d3de09ad56554ee1856635468d36fd05fc22181180ea60b7bec8f95492b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
