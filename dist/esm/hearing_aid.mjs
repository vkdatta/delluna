export const name="hearing_aid";
export const id="dl_388c607be8ab3334fa89";
export const url=new URL("../icons/hearing_aid.svg?v=6181fcf6261b5bc3f3db70e702c328406eba7ee101d8a66313fdb9f909073432",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
