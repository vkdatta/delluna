export const name="license-fill";
export const id="dl_1e79f0ca58e53eb98ff9";
export const url=new URL("../icons/license-fill.svg?v=43e3406036298c31e4e7a9f25e6c72f865db1b77a83ac2995f47df7cc3a04a58",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
