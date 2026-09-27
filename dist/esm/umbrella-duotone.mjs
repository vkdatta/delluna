export const name="umbrella-duotone";
export const id="dl_ffd64c231e2997d98ccf";
export const url=new URL("../icons/umbrella-duotone.svg?v=9b3e345ac9a5d194288dbc8dca0d4b40fc2f4cb0857b7aeced22a3343496cbfc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
