export const name="prescriptions";
export const id="dl_8349ea54e0c052788f37";
export const url=new URL("../icons/prescriptions.svg?v=b5fb36b28287478d431648839f2f12f5c8ea0996d5a56272249d8938cd9ff790",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
