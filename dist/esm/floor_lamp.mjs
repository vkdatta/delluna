export const name="floor_lamp";
export const id="dl_fd8a9df53ba64dcd8b3f";
export const url=new URL("../icons/F/floor_lamp.svg?v=c2010de15f03d72db893297e733dfa75592a1fa871510b70ad632569961ac77a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
