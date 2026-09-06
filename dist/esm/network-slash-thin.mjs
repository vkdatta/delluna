export const name="network-slash-thin";
export const id="dl_ef415e76d3704408bdd5";
export const url=new URL("../icons/network-slash-thin.svg?v=06aed748d880365d10b6433c5b12743602125d11ffe9fcd545323a9aac53731f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
