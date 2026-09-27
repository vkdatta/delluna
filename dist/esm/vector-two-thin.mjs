export const name="vector-two-thin";
export const id="dl_83ba4435c7990e36a5d1";
export const url=new URL("../icons/vector-two-thin.svg?v=945f40636620f12e985a0e166f2cb4cb73d470a8246e5d0db5a03622d1489e76",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
