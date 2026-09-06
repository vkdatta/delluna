export const name="linkedin-logo-duotone";
export const id="dl_9efa49a9533d468e8be9";
export const url=new URL("../icons/linkedin-logo-duotone.svg?v=6a6ee47ec652c2bf4f3ae21f329af48532b9ea04674f4cf6d13c43030e100fa9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
