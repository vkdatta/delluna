export const name="caret-circle-double-up-thin";
export const id="dl_e46749c7aaf0477c866f";
export const url=new URL("../icons/caret-circle-double-up-thin.svg?v=965aff55e2095385000984ccee66d7502fe652ee5bb8122ad61d38b1798978a6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
