export const name="smart_outlet-fill";
export const id="dl_e4b12b17188744708199";
export const url=new URL("../icons/smart_outlet-fill.svg?v=81ab796c90678aad31d95b897c830be37bc9023ca8390b48387bd17e4d7b6049",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
