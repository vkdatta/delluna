export const name="number-three-duotone";
export const id="dl_8f5d4a5cd4974097b83d";
export const url=new URL("../icons/number-three-duotone.svg?v=fc07c1789d99c88eaaeb0853ffe115cc9bb67abd7110abcad0699125cdfe4017",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
