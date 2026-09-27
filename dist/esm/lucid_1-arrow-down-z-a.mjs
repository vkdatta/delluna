export const name="lucid_1-arrow-down-z-a";
export const id="dl_e668103f3a0449059ff0";
export const url=new URL("../icons/lucid_1-arrow-down-z-a.svg?v=e458024b77b60b682bc012d57e824775fbdaad26af73f15d0f9e6c1475402a62",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
