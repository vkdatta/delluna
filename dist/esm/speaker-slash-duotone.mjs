export const name="speaker-slash-duotone";
export const id="dl_5be3ff9b711aebfc319a";
export const url=new URL("../icons/speaker-slash-duotone.svg?v=24082e18ee7bd3cab7120f078fbf62fc094865925e8a96b5a2577fdd743663fa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
