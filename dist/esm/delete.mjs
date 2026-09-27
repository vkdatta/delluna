export const name="delete";
export const id="dl_ee483f4d540f1f26e36e";
export const url=new URL("../icons/delete.svg?v=60cc0c4634a6feeec9d25368676a88d0db5f2b31a18183bb22b94ee5bd801d42",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
