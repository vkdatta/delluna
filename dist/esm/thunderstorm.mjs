export const name="thunderstorm";
export const id="dl_c33f4cc9fc3c045cd03e";
export const url=new URL("../icons/thunderstorm.svg?v=5492fc6a109b047a39844a9b2e21252a606466e85c0985947bb9155b2021a172",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
