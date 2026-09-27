export const name="coat-hanger-duotone";
export const id="dl_1eeee8bfc0ec47fe8d5f";
export const url=new URL("../icons/coat-hanger-duotone.svg?v=91399827889b22c7d43f28a256dbea425d0646cc7f0f86672ab177273481af6b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
