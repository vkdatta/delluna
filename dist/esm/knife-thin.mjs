export const name="knife-thin";
export const id="dl_c122f32cece24259a4d1";
export const url=new URL("../icons/knife-thin.svg?v=e8f9b7a445b801946e1432507d98d282b13236f6b64cbb8cdd158e92490599c5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
