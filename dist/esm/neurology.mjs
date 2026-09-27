export const name="neurology";
export const id="dl_cd03f056988973467228";
export const url=new URL("../icons/neurology.svg?v=def5b0758d13b93bad0a5cf0bd66569f7ad86d0a09286eab7b3555ce28802ed0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
