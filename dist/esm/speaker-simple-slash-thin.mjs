export const name="speaker-simple-slash-thin";
export const id="dl_11012c7cb143439a6be3";
export const url=new URL("../icons/speaker-simple-slash-thin.svg?v=1c930ca5fc965ad428d9d9e74ebd5e2e8a36cd19853f2bbdeea2ca4a23a0e57d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
