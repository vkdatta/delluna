export const name="recent_actors-fill";
export const id="dl_d40c0f566150c8e59b63";
export const url=new URL("../icons/recent_actors-fill.svg?v=8e42bbfa923d76eee6f774ad06d2f58c6dedf6ffbab5ef5ca8615d14b121eda8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
