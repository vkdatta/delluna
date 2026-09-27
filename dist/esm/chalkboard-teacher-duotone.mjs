export const name="chalkboard-teacher-duotone";
export const id="dl_8f00dfa3bf09462796bc";
export const url=new URL("../icons/chalkboard-teacher-duotone.svg?v=031dc5e65db6930b7e73b5087abc8ecb6e7a5549cfb4c5085fb51b2dff9ada6e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
