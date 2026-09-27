export const name="user-circle-minus-bold";
export const id="dl_ab48778eae8551346537";
export const url=new URL("../icons/user-circle-minus-bold.svg?v=cde57ac45b97caed1cfbe0a355f186b45a1fdcbb72c9cd913ffb223834f56274",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
