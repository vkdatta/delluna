export const name="step_into-fill";
export const id="dl_4b7cbbee7ee59236e668";
export const url=new URL("../icons/step_into-fill.svg?v=9cbd61fea6d958c9bca2e8cb4b783b5e92acb68a2e624d2297c9ebc6b1a30a58",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
