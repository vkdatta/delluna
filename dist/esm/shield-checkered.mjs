export const name="shield-checkered";
export const id="dl_36a152a0c6439da49ea0";
export const url=new URL("../icons/shield-checkered.svg?v=a4088ea1507beeeb18cc687bbe18daf28d1d94b1e7c026941d8ce1de0ab1646b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
