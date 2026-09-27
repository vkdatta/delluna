export const name="health_and_safety";
export const id="dl_30ee2abc38e10d8ee427";
export const url=new URL("../icons/health_and_safety.svg?v=055d9ba657ed2e23a66675543ad9daaa9b63e7f85530cdd6a65979df8fe5da15",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
