export const name="lucid_1-beef-off";
export const id="dl_a2ddcda247f541dd8f04";
export const url=new URL("../icons/lucid_1-beef-off.svg?v=80d3416ad601c4d38a9240898d48aca00cde799457f1ccdc7dcb7bac2676a983",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
