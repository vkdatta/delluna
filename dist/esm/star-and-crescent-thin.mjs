export const name="star-and-crescent-thin";
export const id="dl_5c090aea6f6b4c2c8973";
export const url=new URL("../icons/S/star-and-crescent-thin.svg?v=21ce25f8a35fb42ac9505e69cf437ac3bc3cb954fc2e54593027c48a26458f6a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
