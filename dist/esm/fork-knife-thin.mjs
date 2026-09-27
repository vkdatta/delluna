export const name="fork-knife-thin";
export const id="dl_4bc8a1e443d64483b3cb";
export const url=new URL("../icons/fork-knife-thin.svg?v=51492d90200b25b3d844faa45dd84a1394e813fe97439afab3410b9e64a2e877",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
