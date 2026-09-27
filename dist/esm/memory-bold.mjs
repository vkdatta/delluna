export const name="memory-bold";
export const id="dl_3330cddb60aa47bc9bb0";
export const url=new URL("../icons/memory-bold.svg?v=2eec3e870981fdc724ad156c5042847957d44817df0d8f395ba329eb5e99aece",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
