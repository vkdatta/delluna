export const name="user-circle";
export const id="dl_a75cb1e26ac2a6ca0dcb";
export const url=new URL("../icons/user-circle.svg?v=3d15caa0ed1fa19cb29f46c47c4b3ae201348f74c78689adbbcb62b7d8c2b2a8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
