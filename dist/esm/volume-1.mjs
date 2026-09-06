export const name="volume-1";
export const id="dl_28cbdd01083a4ee8959f";
export const url=new URL("../icons/volume-1.svg?v=29c11ba0923d3a009f601af427e1d9b444395b31fb4cff560971f8126787ecfc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
