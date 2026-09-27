export const name="raw_off-fill";
export const id="dl_b8dcad413717ad1a29cb";
export const url=new URL("../icons/raw_off-fill.svg?v=3db7e05d080f999024834f852e83596e86ee4658294c4b4160e948de73c88a47",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
