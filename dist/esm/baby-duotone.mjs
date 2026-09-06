export const name="baby-duotone";
export const id="dl_735c0e9874334d1a8130";
export const url=new URL("../icons/baby-duotone.svg?v=0bf8b640a70a82cdd31f36aab2f4756429c6b9e72e3d11c006409226a4177522",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
