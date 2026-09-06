export const name="flag";
export const id="dl_d642370cd27347bbb991";
export const url=new URL("../icons/flag.svg?v=2460f65cc31b6c3ab52ff936b56cfd38b3f179aab5c27fbd810f177d0c7ad24d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
