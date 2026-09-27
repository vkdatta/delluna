export const name="users-four-fill";
export const id="dl_ee4d35c30e866d72b357";
export const url=new URL("../icons/users-four-fill.svg?v=650a9c8ebbc870cffa91c027ed6da440fdeb3972161b87901f986a7942b4d160",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
