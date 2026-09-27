export const name="user-rectangle-fill";
export const id="dl_ef006ac99f093e578466";
export const url=new URL("../icons/user-rectangle-fill.svg?v=7992882ebf68ab04268d8f383aef7d44e292b84a499a977a1a422c8505d92cae",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
