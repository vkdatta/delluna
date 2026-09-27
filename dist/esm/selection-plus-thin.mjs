export const name="selection-plus-thin";
export const id="dl_d40c59988f587c0f6508";
export const url=new URL("../icons/selection-plus-thin.svg?v=0587c7f5053319c06e82806afec33555a5f4c16946a19e42ab4a5310493a0b1d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
