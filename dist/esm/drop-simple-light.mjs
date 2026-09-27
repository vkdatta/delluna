export const name="drop-simple-light";
export const id="dl_cd2c83d1c0864320a188";
export const url=new URL("../icons/drop-simple-light.svg?v=4e71d7e7f7cb4b3e71d7a2970a2b06f9e70528d08981bae6906af72609623ced",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
