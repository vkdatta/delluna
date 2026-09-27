export const name="cylinder-light";
export const id="dl_cedef46ec7ea479fb09e";
export const url=new URL("../icons/cylinder-light.svg?v=bc6274a1e8844323ff0afd372ef063dba60bcaf5a82a458b5f81ad883e3ef5f2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
