export const name="home_and_garden";
export const id="dl_e9995bb1d168ba0fd8fa";
export const url=new URL("../icons/home_and_garden.svg?v=3d04821395aadc9a86aca49a8b159b9d7bc7ccf6f116dd710bdb19c90972d57b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
