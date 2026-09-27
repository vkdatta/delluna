export const name="messenger-logo";
export const id="dl_dfad81a8e99d45b19fad";
export const url=new URL("../icons/messenger-logo.svg?v=7e6f7a8b50946b9198b652d37c963e81e7dc8cdb11f8c36ad8a1d4d71ef7bd3c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
