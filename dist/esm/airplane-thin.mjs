export const name="airplane-thin";
export const id="dl_007b1301cc3649008760";
export const url=new URL("../icons/airplane-thin.svg?v=646b3dbea6652f022752df01806fe9330f70ea34485dabf0949cad4375ba9530",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
