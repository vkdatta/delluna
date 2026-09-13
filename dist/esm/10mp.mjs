export const name="10mp";
export const id="dl_745a5897f8c4424fbc6d";
export const url=new URL("../icons/1/10mp.svg?v=12c8915da4c82f5b892f3b255f2c4433d1e57588651d9dc7d1ae4c73c0f2916d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
