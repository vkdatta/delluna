export const name="bowl-steam";
export const id="dl_e9659e4f5be04821a5de";
export const url=new URL("../icons/bowl-steam.svg?v=6d65afe5ba3f774263c5631675bdbc0015441da2fef0067552c9fce9a3769c21",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
