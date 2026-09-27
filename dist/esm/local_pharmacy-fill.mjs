export const name="local_pharmacy-fill";
export const id="dl_76b5eaeaa14f35359d73";
export const url=new URL("../icons/local_pharmacy-fill.svg?v=db2a0c502fdff61ba9f1b1842cd190c6f2daff782305976a13217bdc969cd1dc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
