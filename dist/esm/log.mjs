export const name="log";
export const id="dl_0a2f5bcf33504a06bf47";
export const url=new URL("../icons/log.svg?v=07791a13520ed81a43ca2ee09cae9cc72fc0bb55b92392317890bdb854fbe4b9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
