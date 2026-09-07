export const name="sailboat-bold";
export const id="dl_4617a1e351874ff6b230";
export const url=new URL("../icons/S/sailboat-bold.svg?v=fe2b59fae335952ea1f706d7155c933c9bd972c729b42ed4e625007afb5c2ce5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
