export const name="hand-pointing-duotone";
export const id="dl_55c25ea545354f21812a";
export const url=new URL("../icons/hand-pointing-duotone.svg?v=e451876ee0570c4461a475304108b5ab8acc1d66ac60e5f9f9a9030eab68a18d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
