export const name="split-vertical-duotone";
export const id="dl_8020981944ecef4eeb12";
export const url=new URL("../icons/split-vertical-duotone.svg?v=cdfc1a7e1258a3f2bcad4b793d58b16f72581cd1c45dbaeb9f4822180b06e789",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
