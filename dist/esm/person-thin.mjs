export const name="person-thin";
export const id="dl_9233db67fb2748489f9e";
export const url=new URL("../icons/person-thin.svg?v=7f24d7e39eafe7f24da29f58de2b26ae41204c7020a7e8de3dec45d26c92b182",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
