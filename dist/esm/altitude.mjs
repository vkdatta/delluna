export const name="altitude";
export const id="dl_23804dfb33ab495d8159";
export const url=new URL("../icons/altitude.svg?v=52c48e285acde8fbe009e1cee9a5e074119e6a8d650061342333d927d286be05",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
