export const name="code-simple-duotone";
export const id="dl_7d849f4a6b4e4411aa55";
export const url=new URL("../icons/code-simple-duotone.svg?v=46e6c8fd4f6a816f15d77c256640aa5b35a22cf3def823922c24a92b4a683f35",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
