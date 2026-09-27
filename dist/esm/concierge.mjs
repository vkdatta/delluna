export const name="concierge";
export const id="dl_285c57d000a5a1723153";
export const url=new URL("../icons/concierge.svg?v=737e5bd85b732a4d71a4a22b4e074b26945988ecea31baa15afbe0e4422344bf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
