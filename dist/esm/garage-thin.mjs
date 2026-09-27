export const name="garage-thin";
export const id="dl_be7e685ff6914feda2fa";
export const url=new URL("../icons/garage-thin.svg?v=d7b2210005586f8535aa239ba2fa99f5854ce6f0afc34252ec7ad6ed6bc579ba",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
