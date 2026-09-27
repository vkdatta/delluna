export const name="pill_off";
export const id="dl_cddf0ca4a2bc4f7f0a4a";
export const url=new URL("../icons/pill_off.svg?v=1c086c522c6b602b288b53b2178e895bd7cee0064e7cf6b8dc773dc5ca8643ed",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
