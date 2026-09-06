export const name="club-bold";
export const id="dl_4fb508b131a649eba647";
export const url=new URL("../icons/club-bold.svg?v=4af9194d56d6510ab8bd3f0d9ea0c0d0109dda342e212bf01c8b71bb85222680",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
