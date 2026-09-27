export const name="maps_ugc";
export const id="dl_d718d314c3fedfa52bde";
export const url=new URL("../icons/maps_ugc.svg?v=b580e94068fbab9ef4f2b3f5085ba74d169fbde2ab8f7f045a12bf3569acf9ea",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
