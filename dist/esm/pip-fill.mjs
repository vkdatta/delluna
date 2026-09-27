export const name="pip-fill";
export const id="dl_57cb81389a596e795c34";
export const url=new URL("../icons/pip-fill.svg?v=b62befd3378a2b7f8b7be9d4100e0230a0077582bc33867874ad967c4e5cdcdd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
