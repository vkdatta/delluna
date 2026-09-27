export const name="plus-light";
export const id="dl_af84aa528600460e893e";
export const url=new URL("../icons/plus-light.svg?v=238c128ae0eeaf784ccdefb5c3e0d80812ceea18f04c61978c182807f011c1ee",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
