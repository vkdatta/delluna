export const name="subscript";
export const id="dl_4ab46ed235a04c7ea3b1";
export const url=new URL("../icons/subscript.svg?v=3b8415419b0bbd8e8ef2d6b1c629424000d75d47e682c072e02c20b406471e00",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
