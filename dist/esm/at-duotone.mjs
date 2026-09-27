export const name="at-duotone";
export const id="dl_00c700e5a4f445408f1a";
export const url=new URL("../icons/at-duotone.svg?v=d6f39e900bbe117c0dc7fd56980ae3321e81b2a0ce3757f0887820783db4fb1d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
