export const name="four-k-thin";
export const id="dl_271619119f8f436f996d";
export const url=new URL("../icons/four-k-thin.svg?v=27863b092ece76fd0644fb0c12f861ad541ac4dcf2279c873d732e85d0ab7908",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
