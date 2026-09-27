export const name="arrow-counter-clockwise-duotone";
export const id="dl_5ce5f8a56e084fae9f1a";
export const url=new URL("../icons/arrow-counter-clockwise-duotone.svg?v=56ded11696e4c5b6e1cfc73ea64bf74e0bc22f03cba9fc116a1a36bfb9201d45",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
