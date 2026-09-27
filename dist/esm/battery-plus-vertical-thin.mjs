export const name="battery-plus-vertical-thin";
export const id="dl_b0c72acd9a264c6ca6c7";
export const url=new URL("../icons/battery-plus-vertical-thin.svg?v=c3a48f9547231302b53b93a5d36312f28bf8d50a8fe4f2db385be5ef34e2ac9a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
