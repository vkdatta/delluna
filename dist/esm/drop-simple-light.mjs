export const name="drop-simple-light";
export const id="dl_cd2c83d1c0864320a188";
export const url=new URL("../icons/drop-simple-light.svg?v=ea3bfe2d85076c63aaa88d025aaabb445fa0af37f244e9f5c42734aa7efbfd16",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
