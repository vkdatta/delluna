export const name="syringe-thin";
export const id="dl_f065c14a9a6c46fd9a88";
export const url=new URL("../icons/S/syringe-thin.svg?v=faa6dd7430e56209734d3c707b44d636f8f0bef77666cada1747a55d728c5337",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
