export const name="counter_4";
export const id="dl_6911b844db8b437db44f";
export const url=new URL("../icons/C/counter_4.svg?v=499b9a9b7c5032063cb79554b372c493a18f2ec5d067700617a6469860ab7875",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
