export const name="ice_skating";
export const id="dl_c7854708c2ae95100123";
export const url=new URL("../icons/ice_skating.svg?v=b2280cb5b5424b532bf909543e9c0e4bf1c0300f7d798ac32ff6d7e30aa7e4c4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
