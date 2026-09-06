export const name="martini-light";
export const id="dl_989b8e2df569494ba985";
export const url=new URL("../icons/martini-light.svg?v=919e5cd9c0e264b555ed50b8dd72bf40335afe0b67649a0dc69f46d4a7bd4d43",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
