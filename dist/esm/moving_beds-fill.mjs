export const name="moving_beds-fill";
export const id="dl_fcbfb292bd184b789dab";
export const url=new URL("../icons/moving_beds-fill.svg?v=8a529c86ad998a02534a40825fdb943e702b53162730b4508ac44df1d33f3cef",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
