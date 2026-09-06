export const name="fan-duotone";
export const id="dl_7fefec197a844556b2ec";
export const url=new URL("../icons/fan-duotone.svg?v=b63896d561140b97a810bd4debfe6d375c4ae949d2ee968ba28e6d62ae16f459",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
