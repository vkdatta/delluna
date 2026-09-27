export const name="potted_plant-fill";
export const id="dl_d5d68454dbcb54ab71b6";
export const url=new URL("../icons/potted_plant-fill.svg?v=5dabce8943173acdabe0c135355bf02ed70ce87f216e99b0e44f03e3e4973af4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
