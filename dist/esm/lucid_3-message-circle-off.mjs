export const name="lucid_3-message-circle-off";
export const id="dl_1bf282505c1d4baaa4e8";
export const url=new URL("../icons/lucid_3-message-circle-off.svg?v=09d25eca3dcd43465fbbfa92ba0c0c51c23e33e56d55c8578c998fb87bfab140",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
