export const name="pentagram-duotone";
export const id="dl_ce6e788289a649b6af12";
export const url=new URL("../icons/pentagram-duotone.svg?v=926d74d99a8c539415b02e319abb166f30bc87de2f8bdc50a29d765b13796d44",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
