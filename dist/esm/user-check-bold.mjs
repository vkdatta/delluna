export const name="user-check-bold";
export const id="dl_ac503601cce2486e8cf8";
export const url=new URL("../icons/U/user-check-bold.svg?v=be3379e9379b660e2008fd66da465e554d76bd05e39fb3b294e1b92e392b3bf2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
