export const name="lucid_2-infinity";
export const id="dl_7fabe8b697f140b5a5ea";
export const url=new URL("../icons/lucid_2-infinity.svg?v=1748cc43b60af0b85cddd323d1ad86f5b97960bc9c2dc77b70b7c56b6df51572",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
