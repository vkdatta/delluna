export const name="syringe-thin";
export const id="dl_714b805020e8b63ce8f0";
export const url=new URL("../icons/syringe-thin.svg?v=faa6dd7430e56209734d3c707b44d636f8f0bef77666cada1747a55d728c5337",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
