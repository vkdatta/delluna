export const name="lucid_3-pointer";
export const id="dl_c132183939674944a435";
export const url=new URL("../icons/lucid_3-pointer.svg?v=e5cc84e8aa85cb9d19826eef04a8f8dfbbd69e1a88e2bc411bbb8599ede9d648",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
