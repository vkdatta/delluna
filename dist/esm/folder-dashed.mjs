export const name="folder-dashed";
export const id="dl_587e529242864693b01a";
export const url=new URL("../icons/folder-dashed.svg?v=c3f71cd7fac889c48f8fbedf7eb88b86a28528aff83e4c477f5cf9ebf56cea36",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
