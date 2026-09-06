export const name="detective-light";
export const id="dl_7caadc1468684fdbae7f";
export const url=new URL("../icons/detective-light.svg?v=3e5a90981ae4e306c3a076a5a5b8b91e4b5bb05f985f9bc69ab63da7d1915f8f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
