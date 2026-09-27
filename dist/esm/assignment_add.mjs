export const name="assignment_add";
export const id="dl_811355d2e5ecae77ed23";
export const url=new URL("../icons/assignment_add.svg?v=7a3b65610364f2677b0006d66f74eca292cd78cf68f016ba8e11f3782e05c491",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
