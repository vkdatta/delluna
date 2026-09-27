export const name="send";
export const id="dl_acdb20ab7ae69fa0f653";
export const url=new URL("../icons/send.svg?v=7bdd7505f9019dc4f42a6eab6810c1d24e2790e131176269e43c8a60e717e039",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
