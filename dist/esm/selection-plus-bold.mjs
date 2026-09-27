export const name="selection-plus-bold";
export const id="dl_e2acf75bf881dc45fd85";
export const url=new URL("../icons/selection-plus-bold.svg?v=ac25006b0200b1355d21fc57157a0bff6fae86c30f00239c69e6119d9f2534b8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
