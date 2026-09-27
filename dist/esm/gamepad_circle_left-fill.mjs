export const name="gamepad_circle_left-fill";
export const id="dl_de505e9bfb99db6a7702";
export const url=new URL("../icons/gamepad_circle_left-fill.svg?v=c6966a87c7074c92ce5f10fd3936fa26618b799dc77cab9cb9f7d43b464b2257",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
