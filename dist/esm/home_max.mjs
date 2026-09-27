export const name="home_max";
export const id="dl_d94719f003715860fcbc";
export const url=new URL("../icons/home_max.svg?v=7cef16914a10d27a386e23c3780422c2a0cf1dd2640309b77b0c16129318574f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
