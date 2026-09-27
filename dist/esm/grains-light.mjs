export const name="grains-light";
export const id="dl_2b37f930053d467b8e60";
export const url=new URL("../icons/grains-light.svg?v=40e259bf572e9bb521830e14a72afb11894e328b97a179f783b387eeadbb4290",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
