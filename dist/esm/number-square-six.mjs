export const name="number-square-six";
export const id="dl_bc5d9bafc5a549abbdd7";
export const url=new URL("../icons/number-square-six.svg?v=d5b70f1b80d77ddcf4471b8c8ca4d909ea5259f68f74b81a1745452fd76f9bb9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
