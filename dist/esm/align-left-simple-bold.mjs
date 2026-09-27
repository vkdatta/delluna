export const name="align-left-simple-bold";
export const id="dl_569008a6dead4edeaee7";
export const url=new URL("../icons/align-left-simple-bold.svg?v=c7c90f5ba00d0b2d3d60b2e742714ae6c0b29645505d85c36a99416436d87738",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
