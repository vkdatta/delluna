export const name="sock-thin";
export const id="dl_fde608c2c7e945648688";
export const url=new URL("../icons/S/sock-thin.svg?v=26f2b15daa74e51af3833d17046fe37a4ffbf01f0a3ee693e92c6bc93b598cc0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
