export const name="handbag";
export const id="dl_743422bfa95e46c2bfa8";
export const url=new URL("../icons/handbag.svg?v=183e533845081da08c49fc7baa416b590e15c83a59b94b850286e365474005b6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
