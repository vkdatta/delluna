export const name="shield_question-fill";
export const id="dl_433f69e29186f3f802bf";
export const url=new URL("../icons/shield_question-fill.svg?v=0be534492383a7e88200ac56604b951ee166308611335b2bb59664da23224639",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
