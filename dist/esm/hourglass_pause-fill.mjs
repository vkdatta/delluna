export const name="hourglass_pause-fill";
export const id="dl_ab8dcf1d0db74af5ac72";
export const url=new URL("../icons/H/hourglass_pause-fill.svg?v=942d5b32a47902ba4bf105051dbc554a4d78af90665ea95a18a5b534782d96ba",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
