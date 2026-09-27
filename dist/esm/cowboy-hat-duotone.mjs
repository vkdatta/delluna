export const name="cowboy-hat-duotone";
export const id="dl_f3c652af06214b0fba06";
export const url=new URL("../icons/cowboy-hat-duotone.svg?v=03bfac3cfbc2a14fd86ae2334ae4ec51c85205c95cb0a312b089ee66102f60af",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
