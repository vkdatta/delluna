export const name="person-simple-walk-thin";
export const id="dl_2ba0ce4a40f240969424";
export const url=new URL("../icons/person-simple-walk-thin.svg?v=7735bdc555504ced9765bcfed7e515657f8f93d01952440ea8ce0aa42712c4f4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
