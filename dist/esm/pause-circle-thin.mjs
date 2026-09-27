export const name="pause-circle-thin";
export const id="dl_d07df6fd29b045768fe4";
export const url=new URL("../icons/pause-circle-thin.svg?v=c1f58fef53f3d1c9c85a9bd43c50a9e95b8e2476fafd463cdc7f5df8bbfa7264",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
