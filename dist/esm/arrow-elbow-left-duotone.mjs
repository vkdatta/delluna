export const name="arrow-elbow-left-duotone";
export const id="dl_419cf4fc84c74f3a801b";
export const url=new URL("../icons/arrow-elbow-left-duotone.svg?v=a9d7211234d3157d353c90d413d33d19e7185fc53662c68f65478f5ab3139716",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
