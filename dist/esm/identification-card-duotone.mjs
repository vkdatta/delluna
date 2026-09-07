export const name="identification-card-duotone";
export const id="dl_66798e7867bb4338a71d";
export const url=new URL("../icons/identification-card-duotone.svg?v=bc8cd160e651589885fedac0154c2c900401edb7d69488867b24b08ce5ea60d1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
