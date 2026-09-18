export const name="hevc-fill";
export const id="dl_f411aa5c624f4e84a3c4";
export const url=new URL("../icons/hevc-fill.svg?v=72eafa4d97a456a121a201f30a4855e2738b2f4d042e3e99c1f584f23aca6985",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
