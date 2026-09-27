export const name="lucid_3-shelving-unit";
export const id="dl_0d24cfea4919468c938c";
export const url=new URL("../icons/lucid_3-shelving-unit.svg?v=41837951733ba25eed1b759ff5e65a2a94c9e9a5f101535ee8f9135f28e42ce6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
