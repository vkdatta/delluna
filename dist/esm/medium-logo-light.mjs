export const name="medium-logo-light";
export const id="dl_3f5e5294a00d438d8c69";
export const url=new URL("../icons/medium-logo-light.svg?v=9e8ab5983ea494aa9c421aa7cefa206d18759ef3d96a96c84cd4332201ca6171",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
