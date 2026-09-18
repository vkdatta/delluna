export const name="person_apron";
export const id="dl_d9ebd78c5abc464ea13f";
export const url=new URL("../icons/P/person_apron.svg?v=9a357e97075fcbdb5d5b136e3518686cb54d50114b009073ea0eaaeaa8abec0a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
