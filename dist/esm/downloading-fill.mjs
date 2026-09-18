export const name="downloading-fill";
export const id="dl_6ce0b1902b0b4df5b484";
export const url=new URL("../icons/downloading-fill.svg?v=2428dad2e183eaed887a25fa934a269251360e265ebff26832b55530e2c8a056",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
