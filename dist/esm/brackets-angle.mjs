export const name="brackets-angle";
export const id="dl_5f0ccf38872d4d4b8948";
export const url=new URL("../icons/brackets-angle.svg?v=6d46b86ee4bd65d58b80fa8c3af20a29644f5604173a2b829031a75cc4ddf360",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
