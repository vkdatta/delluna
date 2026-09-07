export const name="rainbow-thin";
export const id="dl_3b017afd06054625b3a7";
export const url=new URL("../icons/rainbow-thin.svg?v=0a92e07c6006b274cc35cf5c21d6ce5fb5ce5c41fd2089c283ec0e89336f2f1c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
