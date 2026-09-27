export const name="text-align-left-duotone";
export const id="dl_4868c91486e48d52cc70";
export const url=new URL("../icons/text-align-left-duotone.svg?v=84d830b12336de831206ec3074c98425d66ae8c880018f005c32cf0e48f69f51",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
