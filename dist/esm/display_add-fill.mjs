export const name="display_add-fill";
export const id="dl_85caa913e6cbe348111e";
export const url=new URL("../icons/display_add-fill.svg?v=206d6b2e2f81cb80eaebee6a588c06b1eed526030abc2de54fc59006e7e8a3fa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
