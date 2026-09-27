export const name="arrows-out-fill";
export const id="dl_7fa337c3c94a401387da";
export const url=new URL("../icons/arrows-out-fill.svg?v=45e3c33d1ae1e311fa9d9781536f40cad14cce7a5a169a42750141950cd01f2b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
