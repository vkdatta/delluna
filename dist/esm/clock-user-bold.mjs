export const name="clock-user-bold";
export const id="dl_e52bdd620cee4fe79072";
export const url=new URL("../icons/clock-user-bold.svg?v=c28922f73da2defdfe34ddb25af85d0d0b1a201635dd5f02bc542e5392fc26cd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
