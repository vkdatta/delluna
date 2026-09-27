export const name="garage-thin";
export const id="dl_be7e685ff6914feda2fa";
export const url=new URL("../icons/garage-thin.svg?v=54b8140997ebb5f3b056c03f7970e86cc56e2b779aff72df8018306763bec43c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
