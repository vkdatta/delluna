export const name="club-bold";
export const id="dl_4fb508b131a649eba647";
export const url=new URL("../icons/club-bold.svg?v=4fcac417b3c3c2f5779a73b53c0cd642be483538493d7edbde2e5ef1a2e83026",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
