export const name="github-logo-light";
export const id="dl_4313b30a62f941a89524";
export const url=new URL("../icons/github-logo-light.svg?v=b798b127d06cc33f8a30b7b320ad04cf29e08f4085b1751339d69c2170f694c8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
