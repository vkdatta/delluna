export const name="user-switch";
export const id="dl_ca85a3157341aff230bc";
export const url=new URL("../icons/user-switch.svg?v=214db20b1bb3da92cd22a9dc4fd1ebf634ebb2e4902d7e205bf89d5ec7d20e06",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
