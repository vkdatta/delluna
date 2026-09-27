export const name="emergency_heat_2-fill";
export const id="dl_9b7e1837fc9a608afc6e";
export const url=new URL("../icons/emergency_heat_2-fill.svg?v=8fa961f763d072847fa8d9c7b1caf46a5c8a7e7c92c3b716b94397d09e692329",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
