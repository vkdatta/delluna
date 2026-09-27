export const name="caret-up-down-bold";
export const id="dl_4d712f8b648a4c30974b";
export const url=new URL("../icons/caret-up-down-bold.svg?v=c3140a516957505702350c88143c5211f37dabb306c37bcb108c7e5a931cab66",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
