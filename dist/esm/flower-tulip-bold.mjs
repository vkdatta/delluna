export const name="flower-tulip-bold";
export const id="dl_674ff148b8b54a0da87b";
export const url=new URL("../icons/flower-tulip-bold.svg?v=d5da8c89dde48808bbbb22ae2f23be0be75ac52f2dc18781eac2af3c8db4fe33",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
