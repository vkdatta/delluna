export const name="overview_key";
export const id="dl_2a42f54efd00da514b74";
export const url=new URL("../icons/overview_key.svg?v=8d53001610b612b59018a3065b8309df0feb98c81cbe7d672505ed41c018a7b7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
