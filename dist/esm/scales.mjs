export const name="scales";
export const id="dl_6cc213ea56f3e68b0f1a";
export const url=new URL("../icons/scales.svg?v=f384f647cf98f01a5e61db897c667fa00fb4d4098f668294d8f54d07531dc856",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
