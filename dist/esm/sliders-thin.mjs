export const name="sliders-thin";
export const id="dl_ffc670cd5ecbaf0a740a";
export const url=new URL("../icons/sliders-thin.svg?v=bc2456f5fe1edd7859ec546ef5961e378f9f0211e14563c8a71b49486c927d0e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
