export const name="bike_scooter";
export const id="dl_1a59ab0e202ac902b307";
export const url=new URL("../icons/bike_scooter.svg?v=af2e54b3469f6b39247b2b431b780445b0ef68cfd011a6af7165c6b44c3ba9b7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
