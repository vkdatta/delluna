export const name="download-thin";
export const id="dl_6f403cf34edd4136be2d";
export const url=new URL("../icons/download-thin.svg?v=9471b482f51b126eb8cfa378518c7c364729032a68564da4f57cbfdbb3b68d84",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
