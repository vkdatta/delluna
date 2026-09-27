export const name="person-simple-thin";
export const id="dl_4323a50636624fe5bfab";
export const url=new URL("../icons/person-simple-thin.svg?v=242871fa622b9161d41d5d7d855eec234418ebfa3936a61ee8caf826d8013eda",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
