export const name="cat";
export const id="dl_51fe692d9a6d4515bf02";
export const url=new URL("../icons/cat.svg?v=71123efb9241bbe923e7abe04608e89532984b9178fae6dcf56ac1024140b83b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
