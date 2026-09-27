export const name="arrow-arc-right";
export const id="dl_e05d0a8434d442a4b62d";
export const url=new URL("../icons/arrow-arc-right.svg?v=cf628ceca7c98cf8c0007ffebc129145067f916383e738f6bbd9a24f1e20c382",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
