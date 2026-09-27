export const name="1k";
export const id="dl_9dc2b484a6560c5f357a";
export const url=new URL("../icons/1k.svg?v=45c417aa09c0c89eab5c209d35b3dc444e7612b4207f4e2dcf0ead8e5b0e4dc1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
