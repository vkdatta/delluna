export const name="arrow-counter-clockwise-duotone";
export const id="dl_5ce5f8a56e084fae9f1a";
export const url=new URL("../icons/arrow-counter-clockwise-duotone.svg?v=efd3a7e795b93e1b0e4ae701712f2800fbde4e08fee706ed0d6c3f234f52037c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
