export const name="play-light";
export const id="dl_c95de29339eb42a7af28";
export const url=new URL("../icons/play-light.svg?v=9d9ac3f00479550fecdd3f0cb11d131c555ceca77bff4c1ef5bf21c770ec1488",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
