export const name="lifebuoy";
export const id="dl_3e78961076c048a28390";
export const url=new URL("../icons/lifebuoy.svg?v=82694ecfa9c3bc1498238548a465bb060d58950992aa6c69399cdb57c89c8154",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
