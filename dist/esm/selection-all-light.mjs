export const name="selection-all-light";
export const id="dl_6e91e8f2a4ce40a38a30";
export const url=new URL("../icons/S/selection-all-light.svg?v=50168cb18950064e2a76ff52bb11f6cd2173c4c211227c373bd115d1c56bbfbe",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
