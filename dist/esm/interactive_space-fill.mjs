export const name="interactive_space-fill";
export const id="dl_bace9571a66c6bd15ca7";
export const url=new URL("../icons/interactive_space-fill.svg?v=f6faab6645dce079f7d7428d7037e5e3932ed757e9654dfdf22b55bc1516ee4f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
