export const name="no_business";
export const id="dl_280685d5566e359be9a7";
export const url=new URL("../icons/no_business.svg?v=36a27854aa816c7b68ca73b55125003e9b80c1c380f709ad832adb72ba77ffca",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
