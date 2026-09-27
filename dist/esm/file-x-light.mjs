export const name="file-x-light";
export const id="dl_1aadcea6bb2c4c25b3e7";
export const url=new URL("../icons/file-x-light.svg?v=d3fbdc4b67318ab1a30a260c2dd4defb418c0028707b08bdfb1a8d9cc512f84e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
