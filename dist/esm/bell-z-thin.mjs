export const name="bell-z-thin";
export const id="dl_ec1bedb67f9c424fb84f";
export const url=new URL("../icons/bell-z-thin.svg?v=7a38df26be39d9c1235bfa92f98d717ee3fb4fcd6184f52bd63667a868a8005c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
