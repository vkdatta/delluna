export const name="rear_camera-fill";
export const id="dl_8b983031e8dfd00e5e70";
export const url=new URL("../icons/rear_camera-fill.svg?v=26f7f6dba70c368a16c1be9e7110905597805688d11140c2a22213b38f9d27b1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
