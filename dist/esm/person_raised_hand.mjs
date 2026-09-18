export const name="person_raised_hand";
export const id="dl_e752460a8fb948fca731";
export const url=new URL("../icons/P/person_raised_hand.svg?v=14124c131a28e81d1ff2e5511193cf44cc1a9c1eb112ac89c5eb59ae473e8a00",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
