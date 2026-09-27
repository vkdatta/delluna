export const name="switch_video-fill";
export const id="dl_364210bebabed43a47c1";
export const url=new URL("../icons/switch_video-fill.svg?v=1e842db249d6f879a5510c407ed8fcef238ec30ce6c172fafd4620989b5c4e21",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
