export const name="monitor-play-thin";
export const id="dl_7f8e0d6f4bbf4b72ae44";
export const url=new URL("../icons/monitor-play-thin.svg?v=ffe56db0f1ee5d020fb2b9e3ba997f2415389a4958a9b51ca82a32acd316f828",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
