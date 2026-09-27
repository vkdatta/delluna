export const name="pipe-thin";
export const id="dl_18f9767805a74f17b85d";
export const url=new URL("../icons/pipe-thin.svg?v=0eeb75f54d572b165068d6d4a173a957c1d694e3d39d5989b9fcaccec17b7742",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
