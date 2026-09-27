export const name="sign-out";
export const id="dl_0537ec21a8b3a559c6da";
export const url=new URL("../icons/sign-out.svg?v=89fc14fc3d76eeaf93f57b8db73c7058f2d184259d32b60803df60cc73e02383",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
