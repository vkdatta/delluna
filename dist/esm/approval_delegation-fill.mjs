export const name="approval_delegation-fill";
export const id="dl_052ba26525f3ea2175bb";
export const url=new URL("../icons/approval_delegation-fill.svg?v=6b9b8c6b0ddf93c56d70eaeb060b0776ba83c5f34f2298b8df05d9b8717cdc30",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
