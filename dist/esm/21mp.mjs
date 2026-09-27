export const name="21mp";
export const id="dl_e8ae620f809452393cd1";
export const url=new URL("../icons/21mp.svg?v=41f7b1d126690e169d829f807737734d543e203c1f3cc962f3c98bd884bce8f8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
