export const name="timer_play";
export const id="dl_de37a30b5ed9d46056b0";
export const url=new URL("../icons/timer_play.svg?v=2467f0c9768e6fafb879afb53927da47f8504ff2ec423cf0da36991e92c427c2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
