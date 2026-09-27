export const name="meal_dinner-fill";
export const id="dl_4e29f7269d1a23443436";
export const url=new URL("../icons/meal_dinner-fill.svg?v=e89d74b4e3965132ab61f8d5976d677658743bf413afb464d902c45fab6a9c2a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
