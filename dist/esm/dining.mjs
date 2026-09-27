export const name="dining";
export const id="dl_04a97a0a3101b64c0c55";
export const url=new URL("../icons/dining.svg?v=c8125381bd422885fcff6aaec3decae502fe7fb4a4f53d5ae5ac14ad73d0fb66",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
