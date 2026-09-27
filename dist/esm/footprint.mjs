export const name="footprint";
export const id="dl_f7e1ab9b134c9349ed29";
export const url=new URL("../icons/footprint.svg?v=160522c637c0190d101545616c1fa93a493943a72e0fce848c6a4bc09149a736",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
