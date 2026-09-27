export const name="co_present";
export const id="dl_637914d29f4cb6d50322";
export const url=new URL("../icons/co_present.svg?v=6b644789a7efde740a9cd4f56f5f62bf0a05c7cfc277e435b911debc48cf0674",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
