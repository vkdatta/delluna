export const name="thermometer-thin";
export const id="dl_d367fb5e9eaf31650d94";
export const url=new URL("../icons/thermometer-thin.svg?v=71d075c3889ec49472e8bb1c2b4626538bc43b4e77b4f6b4d0f08efacfc0f60d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
