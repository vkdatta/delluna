export const name="codepen-logo-light";
export const id="dl_cd11a043b38c472292b6";
export const url=new URL("../icons/codepen-logo-light.svg?v=92074d807ba95e8e199d6eb3a535a8749ea42f8034d0e2ff980ac75f2aeb21e7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
