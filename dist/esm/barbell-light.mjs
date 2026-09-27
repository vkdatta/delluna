export const name="barbell-light";
export const id="dl_d43d26daca49493fb7e6";
export const url=new URL("../icons/barbell-light.svg?v=fe6b343e3554a72e7cb577613955b0e93dc0c2a14590ea45ad0019ff56c1644c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
