export const name="user-circle-bold";
export const id="dl_3806c99b04881b70ffbe";
export const url=new URL("../icons/user-circle-bold.svg?v=7b2aa1c147e07456a20172b4e153902da98211877d76c258bfe377164837314f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
