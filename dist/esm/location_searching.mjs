export const name="location_searching";
export const id="dl_f36bff16a3a87862e332";
export const url=new URL("../icons/location_searching.svg?v=da215ed605d45f07796d8545e8145f8f314d90dbdfc37db4930329ab77cdfe85",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
