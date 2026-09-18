export const name="plane_contrails";
export const id="dl_06a6c6901abc4224ac2b";
export const url=new URL("../icons/P/plane_contrails.svg?v=5cdd7e000ec1f08a6048b39bfa64aeb66fc64ce40049a2bbde0d12928cd400d2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
