export const name="network-slash-thin";
export const id="dl_ef415e76d3704408bdd5";
export const url=new URL("../icons/network-slash-thin.svg?v=17181f5c6a6d2ea46fc86d00d0c3d6d250995519cfba2aa246369d6d444884db",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
