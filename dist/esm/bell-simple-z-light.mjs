export const name="bell-simple-z-light";
export const id="dl_e5a5b91e510c47f2bc07";
export const url=new URL("../icons/bell-simple-z-light.svg?v=4b907d9622dc1d1ad391ce7317aea4f9273b353c28f6715336073e488b87e4ff",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
