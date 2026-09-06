export const name="image-broken-thin";
export const id="dl_41b5e29cc3c04ab7ae85";
export const url=new URL("../icons/image-broken-thin.svg?v=d2239c74269a007c542f6094919dfca5c131ec8a610cfd7254369e3abec8738e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
