export const name="nature_people";
export const id="dl_1d640c62b64b55e14423";
export const url=new URL("../icons/nature_people.svg?v=de8b6c41b729d6db265e7a62ca469821846d2650174d15d1e2b32cd13c1e6df7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
