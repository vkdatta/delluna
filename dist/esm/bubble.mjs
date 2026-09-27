export const name="bubble";
export const id="dl_7769e02745e99a51b685";
export const url=new URL("../icons/bubble.svg?v=93f4b7b77022b5a9cd6872c85dd66811a876226a558f8b813be21808ee4005f1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
