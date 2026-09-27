export const name="sun-dim-duotone";
export const id="dl_e6c4cf37960921e036e1";
export const url=new URL("../icons/sun-dim-duotone.svg?v=fb4ff45564d95a61d75c35227606bcb59dfa5864217c2cdb2286fabe74ec0de1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
