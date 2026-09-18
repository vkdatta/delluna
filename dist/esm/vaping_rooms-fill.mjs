export const name="vaping_rooms-fill";
export const id="dl_9640bd3e3b05496c828a";
export const url=new URL("../icons/V/vaping_rooms-fill.svg?v=a3e8d921d61a2271e72790bf820c13d524b4c4ae36236dbcada18dcc6e63df4b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
