export const name="wifi-slash-fill";
export const id="dl_70cc9aacc4758e42bf60";
export const url=new URL("../icons/wifi-slash-fill.svg?v=c22f47f577273f790e03eb945bc845e0bab41e8f5cdb8f8a57d8d30e96246539",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
