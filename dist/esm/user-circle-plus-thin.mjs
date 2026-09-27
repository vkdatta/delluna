export const name="user-circle-plus-thin";
export const id="dl_a4a154da6c6633a6ef3d";
export const url=new URL("../icons/user-circle-plus-thin.svg?v=bcb524ce61613e3d1c5455f268a55426c0c8bcb40072e527b96eeaa84fc03e11",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
