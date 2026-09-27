export const name="table-light";
export const id="dl_787218d39102b58b0e38";
export const url=new URL("../icons/table-light.svg?v=7ba41d5e5e39d2c60c77560bf0c7848a5ec3e42dcda06f1a077832c947f80b0f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
