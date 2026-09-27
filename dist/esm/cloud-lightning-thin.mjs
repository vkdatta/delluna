export const name="cloud-lightning-thin";
export const id="dl_ee9663f6a9244721826a";
export const url=new URL("../icons/cloud-lightning-thin.svg?v=1974c3dcad3611334c78dca09b42bab63f1084ef59db71dc98dc4620d6cb29b5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
