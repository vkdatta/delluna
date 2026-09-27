export const name="tooth-thin";
export const id="dl_294dd8c3c905ed61bf36";
export const url=new URL("../icons/tooth-thin.svg?v=1547f97f14cee3c2ef6e99549e37285a1bceeabc5c36cc6e4953e4064868aa4d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
