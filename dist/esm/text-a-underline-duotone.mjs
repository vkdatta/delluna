export const name="text-a-underline-duotone";
export const id="dl_11188babfa3442a4abbf";
export const url=new URL("../icons/T/text-a-underline-duotone.svg?v=4a1d9f31393def3bd161d05c8de76eb12e4829de1965a03599729904d1ce281f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
