export const name="arrow-line-down-bold";
export const id="dl_343d4b5df0534ee0a1a4";
export const url=new URL("../icons/arrow-line-down-bold.svg?v=4f2d7a63f6a3e58096704dde9eea3d170a753cc47daf9288e913aa21abfef777",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
