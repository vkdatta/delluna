export const name="send";
export const id="dl_afd83cbf97f14032a356";
export const url=new URL("../icons/vkdico/send.svg?v=7bdd7505f9019dc4f42a6eab6810c1d24e2790e131176269e43c8a60e717e039",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
