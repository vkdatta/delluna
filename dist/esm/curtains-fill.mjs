export const name="curtains-fill";
export const id="dl_e376246374099182c9c7";
export const url=new URL("../icons/curtains-fill.svg?v=68e8eade05aa7fc9f8c6171d6f62fdbe3358b0e036bff6700d8ed1b26091f564",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
