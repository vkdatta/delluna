export const name="currency-krw-light";
export const id="dl_72d415b8bfc847b595ed";
export const url=new URL("../icons/currency-krw-light.svg?v=0398915bf302809aed76ca2c36eda2c4a702f0f9958f93b369be7e5df8302b58",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
