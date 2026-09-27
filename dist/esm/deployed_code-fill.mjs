export const name="deployed_code-fill";
export const id="dl_5414d66cbe0b433eb470";
export const url=new URL("../icons/deployed_code-fill.svg?v=6290475b49e0f5aeabf1eedcbd78c33c5e67f4106e66ff43fa01044bc2f4f790",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
