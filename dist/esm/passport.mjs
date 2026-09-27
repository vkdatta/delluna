export const name="passport";
export const id="dl_9496965e4cf6f62b3553";
export const url=new URL("../icons/passport.svg?v=c271516254b5d5ee60421f22caa52ec0539ec119cfbc86fb9e2ab6d4f016b0c0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
