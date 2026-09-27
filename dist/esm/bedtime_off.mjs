export const name="bedtime_off";
export const id="dl_d0cd4fa54a96b6f1e57e";
export const url=new URL("../icons/bedtime_off.svg?v=1d9834ffe51b36aeef21e51a18bab17eecf6d744ebe3b572bd71b1fed248eaa2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
