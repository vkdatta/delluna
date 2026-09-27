export const name="fire-thin";
export const id="dl_6192728035eb454f8da0";
export const url=new URL("../icons/fire-thin.svg?v=1ee371ad235d8dd0806004725c829e19e2469a0217626aa9b1fde90f04044565",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
