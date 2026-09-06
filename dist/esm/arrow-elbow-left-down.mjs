export const name="arrow-elbow-left-down";
export const id="dl_9875aaee11bb4f918f47";
export const url=new URL("../icons/arrow-elbow-left-down.svg?v=6afc417ed8023d48eae71e15f6c124f59abe40715807be43ff92faf54a438999",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
