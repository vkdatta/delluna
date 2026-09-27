export const name="stairs-duotone";
export const id="dl_d0c19f450933d3921a77";
export const url=new URL("../icons/stairs-duotone.svg?v=ed638d5894d9f3a87ad95e83a5e9bf3fbe4531e4020d8d4904f40da422f3eef4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
