export const name="sphere-bold";
export const id="dl_05786ccdece9f8b52d45";
export const url=new URL("../icons/sphere-bold.svg?v=4a06b279a95988d31ebe8fb5c03941e430f0919db05596356b17861ff91b8055",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
