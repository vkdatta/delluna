export const name="lock_person-fill";
export const id="dl_b95cd025a4e36e36c919";
export const url=new URL("../icons/lock_person-fill.svg?v=1180c1e55ca6d7cce6d4ec717c3c1b35a03f04f76dbc2d1e99d853a0ca5913e3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
