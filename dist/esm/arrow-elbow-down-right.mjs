export const name="arrow-elbow-down-right";
export const id="dl_5a552c4580a04508bbdf";
export const url=new URL("../icons/arrow-elbow-down-right.svg?v=c32ccca02ae77c427aad949c31763390c74b5c05424cd137a2bae0b35be5307c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
