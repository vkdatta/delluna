export const name="hand_meal";
export const id="dl_235e5476e19ebdfd7137";
export const url=new URL("../icons/hand_meal.svg?v=3b237ff67a81a763b592a2711c6699df9e3beb2880977edcc25c375c9fd88312",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
