export const name="collapse_up_alt";
export const id="dl_b75d137812338a663d95";
export const url=new URL("../icons/collapse_up_alt.svg?v=49165d1d7a2f729459930f18076995996b175c3821a809aa39bbb61511f5db23",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
