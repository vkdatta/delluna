export const name="nephrology-fill";
export const id="dl_ab73b2b1b2df19c8558b";
export const url=new URL("../icons/nephrology-fill.svg?v=c8ae31df364e2dc162d35892f4c83b85703406b796c393605a4e74919c5de4b9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
