export const name="github-logo-light";
export const id="dl_4313b30a62f941a89524";
export const url=new URL("../icons/github-logo-light.svg?v=b877234873d25fe8e29b0d77ce5f7a92a430e8d450bdbed185c3adb00cdafd21",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
