export const name="pi-light";
export const id="dl_49e8f48661d14570b497";
export const url=new URL("../icons/pi-light.svg?v=362860eab220beb6edf1d793555f7886126b2045fbe542caa3d182f9a06b3af3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
