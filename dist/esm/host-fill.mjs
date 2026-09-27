export const name="host-fill";
export const id="dl_eb4778045e9ba4d1423c";
export const url=new URL("../icons/host-fill.svg?v=b8de18e38d6269d2dc64a38828a9ba9f5e48015894d2beb7fbb7a93dace15e5a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
