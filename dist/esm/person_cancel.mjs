export const name="person_cancel";
export const id="dl_aa22918da31d0140b014";
export const url=new URL("../icons/person_cancel.svg?v=8c9144b6e14771937f33de395df176317c6bf5a3cdc5b44765296c2cb01781d8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
