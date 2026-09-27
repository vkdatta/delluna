export const name="lucid_3-pipette";
export const id="dl_16e9aa996e284e8a88c8";
export const url=new URL("../icons/lucid_3-pipette.svg?v=4d6784631ed77b7fc66aa427c611298473a9673e0d41be90d455c81ceb1247c1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
