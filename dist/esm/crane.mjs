export const name="crane";
export const id="dl_7429544e546a4ef79e47";
export const url=new URL("../icons/crane.svg?v=9a54a12751ffbf6116866e453c11e52096fbcf6cedb38ba3a164fe522a067cbe",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
