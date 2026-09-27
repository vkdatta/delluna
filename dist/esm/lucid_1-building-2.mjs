export const name="lucid_1-building-2";
export const id="dl_cd5854a3a5e84f49b45c";
export const url=new URL("../icons/lucid_1-building-2.svg?v=4e517bfba599a506a3fc1668c2827670d969828a189a75ddd8c2bd6ff53b4cfe",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
