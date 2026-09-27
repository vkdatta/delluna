export const name="timer_play";
export const id="dl_fa8ce9cf50f37f13a66c";
export const url=new URL("../icons/timer_play.svg?v=8b080816d7d4c040d0af690cdcc59b12cac796d56e55d32010c558de4d2b64ca",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
