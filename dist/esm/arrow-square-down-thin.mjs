export const name="arrow-square-down-thin";
export const id="dl_2bb5b2c0f56a4d6f904c";
export const url=new URL("../icons/arrow-square-down-thin.svg?v=7beabeff84a097c7c8e7cb0546db3fae574700bc2b8930e4a96fcad745658196",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
