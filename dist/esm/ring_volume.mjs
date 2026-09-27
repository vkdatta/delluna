export const name="ring_volume";
export const id="dl_a51a033208c7264a0a08";
export const url=new URL("../icons/ring_volume.svg?v=10754fd43f8bd453153983a0d65ad438b52aa23732208825d259d412459f581e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
