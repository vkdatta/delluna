export const name="person_shield";
export const id="dl_0ef579d8a6394acb87f2";
export const url=new URL("../icons/person_shield.svg?v=3cbf729575803dd98c17f78d7e3c18b65aa9a0972ba82e848fb602ad9376ac55",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
