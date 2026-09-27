export const name="align-right-thin";
export const id="dl_57310beea56d4508a1e9";
export const url=new URL("../icons/align-right-thin.svg?v=807143b2fdce92404a8388309307f80643491fc067818e9135ef91c1e80b78be",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
