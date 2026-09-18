export const name="hiking-fill";
export const id="dl_97ba2feaf4b14684bcf2";
export const url=new URL("../icons/H/hiking-fill.svg?v=6fa763dc34870cbff829e34bed1440883357867950d559d9fecb0d145c6983c6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
