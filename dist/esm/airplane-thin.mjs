export const name="airplane-thin";
export const id="dl_007b1301cc3649008760";
export const url=new URL("../icons/airplane-thin.svg?v=5ceaf4f5d38ea416e8f8b87d256dc0239249a1c431d017cacb116f019bc49c3f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
