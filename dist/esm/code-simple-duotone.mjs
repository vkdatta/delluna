export const name="code-simple-duotone";
export const id="dl_7d849f4a6b4e4411aa55";
export const url=new URL("../icons/code-simple-duotone.svg?v=e2073e846de2dcbb844581deb760067b3f2e11e6557277368dad26ea54250194",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
