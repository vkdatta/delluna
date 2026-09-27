export const name="egg_alt";
export const id="dl_7035184022515b12c9ea";
export const url=new URL("../icons/egg_alt.svg?v=ee409361a8ecbbe66a24810e1c1748ee3c988dd7eb4829f713d677a2146dd226",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
