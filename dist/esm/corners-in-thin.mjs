export const name="corners-in-thin";
export const id="dl_596b893478224dacbc67";
export const url=new URL("../icons/corners-in-thin.svg?v=c75c8285c16126e8007fc06d59a4415e1b5d55c4b38f3368add6cc23da1a9114",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
