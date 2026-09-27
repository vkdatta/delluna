export const name="lucid_3-move-right";
export const id="dl_7ef437b3ae824d16886e";
export const url=new URL("../icons/lucid_3-move-right.svg?v=be1d10a46f578671dc31d3f118922337ae430bdc5edcc78fbfc7893625261fce",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
