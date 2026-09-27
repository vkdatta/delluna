export const name="move_vertical_arrows";
export const id="dl_ff9fb74155aaf190fe25";
export const url=new URL("../icons/move_vertical_arrows.svg?v=830df5bb444f2a4a11f5583ccaa534950d2de4034269f33d00fb1fa108d93033",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
