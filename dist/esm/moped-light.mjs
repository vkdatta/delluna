export const name="moped-light";
export const id="dl_0010b0bb960d42f3b012";
export const url=new URL("../icons/moped-light.svg?v=0b35677d9b6eda47c2a604470e23f9420327b7978a6af6a69f1dfdefb1abb499",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
