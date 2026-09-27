export const name="account_circle-fill";
export const id="dl_11f795fb856b6026a95f";
export const url=new URL("../icons/account_circle-fill.svg?v=0d7ff633478abcfe88ad327b2eed86cf8de14cd81add5aeffb837b97d48deecb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
