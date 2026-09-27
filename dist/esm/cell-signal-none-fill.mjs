export const name="cell-signal-none-fill";
export const id="dl_43aed82101cd4c2095f4";
export const url=new URL("../icons/cell-signal-none-fill.svg?v=1d6b119268209a2ee70403794bad68dfce41603051d0afbcd5dde72f8caf2ea6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
