export const name="x-logo";
export const id="dl_c39389a3a8fc4c71941b";
export const url=new URL("../icons/X/x-logo.svg?v=e3e1e72236735343f3f6b47c89e92b965a06c37a2ba047566f929152acde9cbd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
