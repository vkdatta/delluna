export const name="not-equals-duotone";
export const id="dl_c64b88fa96154c60ba7a";
export const url=new URL("../icons/not-equals-duotone.svg?v=e3b4d6fe8224c8408e1e6a2651345e7ac98eb8b60ec468759b6ad26c9e8ffdd7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
