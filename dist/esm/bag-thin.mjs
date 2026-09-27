export const name="bag-thin";
export const id="dl_329df036b65b4bbd85bc";
export const url=new URL("../icons/bag-thin.svg?v=a358df6207e18b05a012f8a339189a2965272bef4b0194e40833c01c01558032",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
