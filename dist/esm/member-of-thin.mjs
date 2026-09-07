export const name="member-of-thin";
export const id="dl_8a5a58ba61b944fdb8e4";
export const url=new URL("../icons/member-of-thin.svg?v=5be4aa5824bd7ecbf75b1433c499d6515b1202fba0232fe416702ba71e4172cf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
