export const name="blur_circular";
export const id="dl_e488ad6945f54be101fa";
export const url=new URL("../icons/blur_circular.svg?v=166bcd5d54706345b3d4c47ba4c1438a1dc12e8fbf821139c6fb2cb1cd7324b0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
