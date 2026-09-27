export const name="location_away";
export const id="dl_318d54843566505583a8";
export const url=new URL("../icons/location_away.svg?v=bb79ffe0d1355041d37e15bd6375d108983d0aae43dd9aad944a1b34bb7f0767",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
