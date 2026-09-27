export const name="unarchive";
export const id="dl_21f4932a1579a21c744d";
export const url=new URL("../icons/unarchive.svg?v=4bdc524d4ca31eaecef4e455b7c03059dec05ee6ff30896f3f987939ad94b996",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
