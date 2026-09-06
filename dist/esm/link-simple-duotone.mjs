export const name="link-simple-duotone";
export const id="dl_eb5f8d3829254cc680fb";
export const url=new URL("../icons/link-simple-duotone.svg?v=317b64fac1770f7e9e07ba9a96fb13a2e509087b3fe1d93af016ff8aa7852b40",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
