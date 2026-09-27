export const name="shadow";
export const id="dl_d1972417de3cf1932713";
export const url=new URL("../icons/shadow.svg?v=b4e48dc57c78d0f6b060c210fd1e042e2080916803a0a901908ab005f35975cf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
