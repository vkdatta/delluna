export const name="caret-line-down-light";
export const id="dl_388416dca2bd4c01b9c5";
export const url=new URL("../icons/caret-line-down-light.svg?v=f65898535de9ff81431357fb5d8fc9662250c2421438cc2b3a700647b813b750",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
