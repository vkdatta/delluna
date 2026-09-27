export const name="identification-card-thin";
export const id="dl_a3e309160487449196c8";
export const url=new URL("../icons/identification-card-thin.svg?v=f6774c1dbd205793cc42ede35cb78f853232ae0812a97b3cf2a1b86e6de41ef2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
