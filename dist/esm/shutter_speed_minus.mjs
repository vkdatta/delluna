export const name="shutter_speed_minus";
export const id="dl_cff2aefa8bcf350208c9";
export const url=new URL("../icons/shutter_speed_minus.svg?v=9001f5e6df8c903069a93b4d46b61ef22d594dc5304f1ce56ef588043c88fdc5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
