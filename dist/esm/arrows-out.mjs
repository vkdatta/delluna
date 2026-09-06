export const name="arrows-out";
export const id="dl_fd6d8d9b63c549fa96c3";
export const url=new URL("../icons/arrows-out.svg?v=f6cc35278b35b8bf1ab115ad65ad9925b75fc014eb47e81169a04cd24c6417fd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
