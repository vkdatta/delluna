export const name="minus-circle-thin";
export const id="dl_10d9b88294214d6196b4";
export const url=new URL("../icons/minus-circle-thin.svg?v=0acd6951befe946b09fd6a4fe1f399151e7bfa27c1376958d2c76dcec5fa1d78",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
