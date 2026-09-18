export const name="subway_walk-fill";
export const id="dl_55f17431cd814c5d8e1e";
export const url=new URL("../icons/S/subway_walk-fill.svg?v=104b6abe00818f7978f9767717d70b31f92e34d23f3ceeb9ae225bc1a0f01859",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
