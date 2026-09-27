export const name="bus-light";
export const id="dl_8850583db6d24cea9ccb";
export const url=new URL("../icons/bus-light.svg?v=3ddb47ef5da9abc786188760d6b28a71cbe1e71bada6eed89dcd317a206ec14f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
