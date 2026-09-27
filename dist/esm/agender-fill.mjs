export const name="agender-fill";
export const id="dl_ecdcd94b19d10a5585d1";
export const url=new URL("../icons/agender-fill.svg?v=05444203ff7bb001946f217a3059180285d34699eceb1f048a3f04733353b15a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
