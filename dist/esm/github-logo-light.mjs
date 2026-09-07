export const name="github-logo-light";
export const id="dl_4313b30a62f941a89524";
export const url=new URL("../icons/github-logo-light.svg?v=faa1d0b73b7f64ab75b3bcdf22e3ed5e3b391f9fc840b3f7447cf960d0d2d5b0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
