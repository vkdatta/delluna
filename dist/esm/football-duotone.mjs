export const name="football-duotone";
export const id="dl_81cbd212bacf4bc9a2ba";
export const url=new URL("../icons/football-duotone.svg?v=10c24e4f4eb6eb930254a95f94144f6b30cd89ab82a09357cea6d17bb6fef8a9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
