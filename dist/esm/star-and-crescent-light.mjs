export const name="star-and-crescent-light";
export const id="dl_77ba1acfdfe44e25864a";
export const url=new URL("../icons/S/star-and-crescent-light.svg?v=14e5f8a645a341842723dba09404cf08d35e712dd5d7eb28d3b84c865c346cee",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
