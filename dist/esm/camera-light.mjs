export const name="camera-light";
export const id="dl_450445ae88e34e048c47";
export const url=new URL("../icons/camera-light.svg?v=656891b12185af5264b699ea03fe3fc480d69661cbf980a1e9b9b45f2d8094e8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
