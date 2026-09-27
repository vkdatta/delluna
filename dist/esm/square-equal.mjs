export const name="square-equal";
export const id="dl_84f69252e35e4826ac61";
export const url=new URL("../icons/square-equal.svg?v=ef06e7bc30994039b888058bcd414e35a447ed7889c8684cc9ed0f7bb9c485cb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
